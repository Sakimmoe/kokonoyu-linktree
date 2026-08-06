# 九重紫 Kokonoyu — Linktree 風オフィシャルリンク集

日系 VTuber「九重紫（Kokonoyu）」的 Linktree 风格个人主页，支持中文 / 日本語切换。

## 技术栈

- Next.js 15（App Router）
- TypeScript
- Tailwind CSS v4
- 可直接部署到 Vercel

## 本地运行

需要 Node.js 20+：

```bash
npm install
npm run dev
```

打开 http://localhost:3000 预览。

## 构建

```bash
npm run build
npm run start
```

## 部署到 Vercel

1. 把本项目推送到 GitHub。
2. 在 Vercel 中导入该仓库，框架选择 Next.js，其余保持默认。
3. 或使用 Vercel CLI：在项目目录执行 `vercel --prod`。

## 自定义

### 链接与文案

所有按钮、简介、页脚文案都集中在 [`src/data/links.ts`](src/data/links.ts) 中修改，链接顺序与 kokonoyu.com 一致：

哔哩哔哩 → YouTube → X (Twitter) → FANBOX → Fantia → BOOTH → 爱发电 → 邮箱

### 语言切换

默认语言在 [`src/components/Home.tsx`](src/components/Home.tsx) 顶部的 `DEFAULT_LANG` 修改（`"zh"` 或 `"ja"`）。用户的选择会保存在浏览器 localStorage 中。

### 背景图与图标

- 背景图：替换 `public/bg-character.png`。
- 浏览器图标：替换 `src/app/favicon.ico`。
- 头像：替换 `public/avatar.png`（建议正方形、人物居中）。

## 素材来源

- 背景图与头像素材由页面所有者提供。
- 链接信息参考 https://www.kokonoyu.com/ 的顺序整理。
