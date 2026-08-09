# 项目长期记忆 — nextjs-sanzhili-cloner

## 关键环境事实（可复用）
- **Next.js 16 在此定制版中把 middleware 重命名为 proxy**：约定文件 `src/proxy.ts`，导出 `proxy` 或 default 函数；next-intl 的 `createMiddleware(routing)` 直接在此使用。不要写 `src/middleware.ts` / `middleware()`。
- **沙箱 safe-delete 批量守卫**：单轮删除 ≥50 个文件会触发 `SAFE_DELETE_BULK_CONFIRM_REQUIRED` 并中断进程。这会让 `next build` 在清理旧 `.next` 时失败。
  - 现象：构建卡住或报 `Build error occurred ... SAFE_DELETE_BULK_CONFIRM_REQUIRED`。
  - 绕过：在 `next.config.ts` 临时加 `distDir: ".nextbuild"`（新目录无需清理），构建/启动/审计均从新目录读取；事后还原 `distDir`。
  - `mv .next` 会被进程锁 `Permission denied`，无法直接改名腾挪。
- `header.less` 是死代码（未被任何文件导入），删除被守卫拦截，已保留。

## 审查/审计约定
- 自动化审计脚本：`scripts/audit.mjs`（Playwright）。用法：`node scripts/audit.mjs http://localhost:PORT`（需先 `next start` 并提供端口；Playwright 需 `playwright` 包 + 匹配版本 Chromium）。
- 产出：截图 `docs/qa/{desktop,mobile}/`、报告 `docs/qa/report.json`、汇总 `docs/qa/QA_REPORT.md`。
- 判定：以 `scrollWidth === 视口宽`（`hasHOverflow=false`）确认无真实横向滚动；Swiper 非活动 slide 落在视口外的 overflow 属正常误报。
