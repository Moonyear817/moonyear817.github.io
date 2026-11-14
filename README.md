# 0x0817

个人主页：三维教堂与红海场景、滚动运镜、像素落字阅读页、语言切换、日夜模式，以及建模和代码项目。

**网站：** https://moonyear817.github.io/

## 源码方案

本分支为 **固定空间展板版**。三组展板预先放在门后的空间中。远处看到轮廓，靠近后正文清晰，经过后展板留在原处。

两种方案均保留原来的建筑、镜头轨道、机位、视角和滚动节奏，以及红色标题栏和半透明面板。

| 方案 | 源码分支 | 当前用途 |
| --- | --- | --- |
| 固定空间展板版 | [codex/spatial-exhibits](https://github.com/Moonyear817/moonyear817.github.io/tree/codex/spatial-exhibits) | 当前主页；与发布切换时的 main 相同 |
| 进门后显现版 | [codex/door-reveal](https://github.com/Moonyear817/moonyear817.github.io/tree/codex/door-reveal) | 独立保留的另一方案 |

每个分支都包含可独立运行的完整源码。原先四窗口主页保留在 [切换前提交](https://github.com/Moonyear817/moonyear817.github.io/tree/bfec84b04289b04354d64853cc6f2b6a9eb3cdc7)。

## 本地预览

无需构建步骤或安装依赖。使用 Node.js：

```sh
node serve.mjs
```

打开 http://127.0.0.1:4348/ 。

## 内容位置

- `index.html`、`style.css`：页面结构与原有样式。
- `js/portal-panels.js`、`portal-panels.css`：三组门内模块的位置、透视、门洞裁切及当前分支的呈现方式。
- `js/scene.js`、`js/path.js`、`js/main.js`：三维场景与滚动镜头。
- `js/project-data.js`：三个项目入口及四个建模作品的中、英、日、韩、俄语介绍与制作过程。
- `js/reader.js`、`js/glyph-rain.js`：阅读页与延迟渐密落字。
- `js/article-data.js`：《Hello Charlotte》中文小说全文；入口为 `#read/hello-charlotte`。
- `js/locales.js`、`js/i18n.js`、`js/theme.js`：语言与主题。

## 多语言

中、英、日、韩、俄语覆盖界面、项目正文、图片说明、研究方法和阅读页。其他语言保留现有界面与阅读文本，项目正文使用英文。

运行 `python3 scripts/check-translations.py` 检查五种主语言的内容完整性。

## 发布

发布前运行 `python3 scripts/prepare-release.py`，为页面、脚本依赖和样式统一生成内容版本号，避免旧缓存。

GitHub Pages 从 `main` 分支根目录发布；`.nojekyll` 保持静态文件直接提供。更新后推送到 `main`，等待 Pages 部署完成。

## 第三方资源

Three.js 许可见 `vendor/three/LICENSE`；字体许可见 `fonts/OFL-*.txt`。模型参考与第三方素材来源随对应项目介绍列出。
