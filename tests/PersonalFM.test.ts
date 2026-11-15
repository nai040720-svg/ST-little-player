import { afterEach, describe, expect, it, vi } from 'vitest';
import { NetEaseProvider } from '../src/provider/NetEaseProvider';
import worker from '../worker/src/index';
afterEach(() => vi.unstubAllGlobals());
describe('personal FM transport', () => {
  it('sends credentials in headers and maps recommendations', async () => {
    const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({ success: true, data: [{id: 42, name: 'Song', artist: 'Artist'}] })));
    vi.stubGlobal('fetch', fetch);
    const songs = await new NetEaseProvider({workerURL:'https://worker.test', cookie:'secret'}).fetchPersonalFM();
    expect(songs[0]).toMatchObject({id:'42', provider:'netease'});
    expect(fetch.mock.calls[0][0]).toBe('https://worker.test/personal-fm');
    expect(fetch.mock.calls[0][1].headers['X-Netease-Cookie']).toBe('secret');
  });
  it('explains when an old Worker is configured', async () => {
    vi.stubGlobal('fetch', vi.fn().mockResolvedValue(new Response('', {status:404})));
    await expect(new NetEaseProvider({workerURL:'https://worker.test',cookie:'c'}).fetchPersonalFM()).rejects.toThrow('新版 Worker');
  });
  it('requires login, forwards encrypted params and does not cache personalized responses', async () => {
    const fetch = vi.fn().mockResolvedValue(new Response(JSON.stringify({code:200,data:[{id:1,name:'Song',artists:[{name:'A'}],duration:120000}]})));
    vi.stubGlobal('fetch', fetch);
    const missing = await worker.fetch(new Request('https://w.test/personal-fm'), {}, {} as any);
    expect(missing.status).toBe(401);
    const result = await worker.fetch(new Request('https://w.test/personal-fm', {headers:{'X-Netease-Cookie':'c','X-Netease-Params':'encrypted'}}), {}, {} as any);
    expect(result.headers.get('Cache-Control')).toBe('no-store');
    expect((await result.json() as any).data[0]).toMatchObject({id:'1',artist:'A',duration:120});
    expect(fetch.mock.calls[0][0]).toBe('https://interface3.music.163.com/eapi/v1/radio/get');
  });
});
