# 心动推荐（账号私人 FM）

播放器和歌单页新增「开启心动推荐」按钮。使用设置中当前网易云账号的 MUSIC_U 获取私人 FM 推荐，按推荐顺序连续播放，批次结束时请求新推荐，过滤最近播放过的重复歌曲。关闭后恢复开启前的队列；普通歌单/搜索播放会退出推荐模式。心动模式中 AI 选曲不会抢播，普通随机/单曲循环设置不会影响推荐流。

## 使用前必须部署新版 Worker

原作者的公共 Worker 不包含新增 `/personal-fm` 路由。本仓库未修改、也无法替你部署原作者的服务。

1. 在 Cloudflare 账号中部署本仓库 `worker`：进入该目录运行 `npm ci`，然后 `npx wrangler login`、`npm run deploy`。如有同名服务，请先修改 `worker/wrangler.toml` 的 name。
2. 更新 SillyTavern 中的扩展到本仓库最新版本，并刷新页面。仓库已包含重新构建的 `dist`。
3. 在扩展设置中选择网易云「自建」模式，填写你部署的 Worker HTTPS 地址。
4. 在自己的插件设置中填写有效的 MUSIC_U，验证登录后点击「开启心动推荐」。不要把 Cookie 提交到仓库或发到聊天里。

遇到旧 Worker 会显示升级提示；Cookie 失效、请求失败、空推荐或仅返回重复歌曲会提示错误，不会悄悄切换成本地随机歌曲。播放到批次末尾时可能短暂等待网络请求。上一首仅浏览当前推荐历史；关闭并重新开启会开始新会话。

## 接口与验证范围

实现使用 `/api/v1/radio/get` 的账号私人 FM 推荐，沿用项目现有 EAPI 加密和 Cookie 转发方式。接口路径参考：
https://github.com/NeteaseCloudMusicApiEnhanced/api-enhanced/blob/main/module/personal_fm.js

这是第三方接口集成，不保证与新版网易云 App 首页「心动」返回完全相同的歌曲或排序。未接入喜欢/不喜欢或收听记录上报。没有用户登录凭据时无法完成真实账号推荐与播放验证；自动化测试使用模拟响应，部署后仍需用自己的账号测试。VIP/地区/下架限制仍由网易云账号权限决定。

检查命令：`npm test`、`npm run typecheck`、`npm run build`；Worker：`npx tsc --noEmit -p worker/tsconfig.json`。
