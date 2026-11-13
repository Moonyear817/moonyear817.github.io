# 0x0817

个人主页：三维教堂与红海场景、滚动运镜、像素落字阅读页、语言切换、日夜模式，以及建模和代码项目。

**网站：** https://moonyear817.github.io/

## 本地预览

无需构建步骤或安装依赖。使用 Node.js：

```sh
node serve.mjs
```

打开 http://127.0.0.1:4348/ 。

## 内容位置

- `index.html`、`style.css`：页面结构与样式。
- `js/scene.js`、`js/path.js`、`js/main.js`：三维场景与滚动镜头。
- `js/project-data.js`：三个项目入口及四个建模作品的中、英、日、韩、俄语介绍与制作过程。
- `js/reader.js`、`js/glyph-rain.js`：阅读页与延迟渐密落字。
- `js/locales.js`、`js/i18n.js`、`js/theme.js`：语言与主题。

## 多语言

中、英、日、韩、俄语覆盖界面、项目正文、图片说明、研究方法和阅读页。其他语言保留现有界面与阅读文本，项目正文使用英文。

运行 `python3 scripts/check-translations.py` 检查五种主语言的内容完整性。

## 发布

发布前运行 `python3 scripts/prepare-release.py`，为页面、脚本依赖和样式统一生成内容版本号，避免旧缓存。

GitHub Pages 从 `main` 分支根目录发布；`.nojekyll` 保持静态文件直接提供。更新后推送到 `main`，等待 Pages 部署完成。

## 第三方资源

Three.js 许可见 `vendor/three/LICENSE`；字体许可见 `fonts/OFL-*.txt`。模型参考与第三方素材来源随对应项目介绍列出。
