import { afterEach, describe, expect, it, vi } from 'vitest';
import { NetEaseProvider } from '../src/provider/NetEaseProvider';
import { AES, Utf8, ECB, Pkcs7, Hex } from 'crypto-es';
import worker from '../worker/src/index';
afterEach(() => vi.unstubAllGlobals());
describe('account likes', () => {
  it('requires an account and a valid ID before sending a mutation', async () => {
    const fetch = vi.fn(); vi.stubGlobal('fetch', fetch);
    await expect(new NetEaseProvider().likeSong('1')).rejects.toThrow('Cookie');
    await expect(new NetEaseProvider({workerURL:'https://w',cookie:'c'}).likeSong('bad')).rejects.toThrow('ID');
    expect(fetch).not.toHaveBeenCalled();
  });
  it('uses POST and only succeeds on an explicit confirmation', async () => {
    const fetch = vi.fn().mockResolvedValueOnce(new Response('{"success":true}')).mockResolvedValueOnce(new Response('{"success":false}'));
    vi.stubGlobal('fetch', fetch);
    const provider = new NetEaseProvider({workerURL:'https://w',cookie:'c'});
    await provider.likeSong('123');
    expect(fetch.mock.calls[0][0]).toBe('https://w/like');
    expect(fetch.mock.calls[0][1]).toMatchObject({method:'POST',headers:{'X-Netease-Cookie':'c'}});
    await expect(provider.likeSong('123')).rejects.toThrow('未确认');
  });
  it('sends explicit true then false for the same song', async () => {
    const fetch = vi.fn().mockImplementation(() => Promise.resolve(new Response('{"success":true}')));
    vi.stubGlobal('fetch', fetch);
    const provider = new NetEaseProvider({workerURL:'https://w',cookie:'c'});
    await provider.likeSong('123', true);
    await provider.likeSong('123', false);
    const payloads = fetch.mock.calls.map(call => {
      const encrypted = call[1].headers['X-Netease-Params'];
      const decoded = AES.decrypt({ciphertext: Hex.parse(encrypted)} as any, Utf8.parse('e82ckenh8dichen8'), {mode:ECB,padding:Pkcs7}).toString(Utf8);
      return JSON.parse(decoded.split('-36cd479b6b5-')[1]);
    });
    expect(payloads[0]).toMatchObject({trackId:'123',like:true});
    expect(payloads[1]).toMatchObject({trackId:'123',like:false});
  });
  it('explains old Worker deployments' , async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('',{status:404})));
    await expect(new NetEaseProvider({workerURL:'https://w',cookie:'c'}).likeSong('1')).rejects.toThrow('更新部署');
  });
  it('rejects unauthenticated mutations and never mutates through GET', async () => {
    const fetch = vi.fn(); vi.stubGlobal('fetch',fetch);
    expect((await worker.fetch(new Request('https://w/like',{method:'POST'}),{},{} as any)).status).toBe(401);
    expect((await worker.fetch(new Request('https://w/like'),{},{} as any)).status).toBe(404);
    expect(fetch).not.toHaveBeenCalled();
  });
  it('forwards the encrypted request and rejects an upstream failure', async () => {
    const fetch = vi.fn().mockResolvedValueOnce(new Response('{"code":200}')).mockResolvedValueOnce(new Response('{"code":500}'));
    vi.stubGlobal('fetch',fetch);
    const request = () => new Request('https://w/like',{method:'POST',headers:{'X-Netease-Cookie':'c','X-Netease-Params':'encrypted'}});
    const ok = await worker.fetch(request(),{},{} as any);
    expect(await ok.json()).toEqual({success:true});
    expect(fetch.mock.calls[0][0]).toBe('https://interface3.music.163.com/eapi/radio/like');
    expect((await worker.fetch(request(),{},{} as any)).status).toBe(502);
  });
});
