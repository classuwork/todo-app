<div align="center">

# 📝 我的待办清单

**一个轻量、零依赖的待办清单网页应用 —— 双击即用，专为练习 Git 而生。**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![No Dependencies](https://img.shields.io/badge/dependencies-0-success?style=flat)
![No Build Step](https://img.shields.io/badge/build-none-blue?style=flat)

</div>

---

## 📖 项目简介

这是一个用**纯 HTML / CSS / JavaScript** 写成的待办清单应用，没有任何框架、没有构建步骤、不需要安装依赖——**双击 `index.html` 就能在浏览器里直接使用**。

它的真正用途是作为一个**循序渐进的 Git 练习项目**：你可以跟着配套教程，在一个真实但足够小的代码库里练习提交、分支、合并等日常操作。

## ✨ 功能特性

| 功能 | 说明 |
|------|------|
| ➕ **添加任务** | 输入内容后点击「添加」或按回车即可创建 |
| ✅ **标记完成** | 勾选复选框，任务会显示删除线 |
| 🗑️ **删除任务** | 每条任务右侧的 `×` 可单独删除 |
| 🧹 **清除已完成** | 一键移除所有已完成的任务 |
| 🔢 **实时计数** | 底部显示「还有几件事要做」 |
| 💾 **自动保存** | 数据存入浏览器 `localStorage`，刷新或关闭页面都不丢失 |

> 所有数据仅保存在你**本地浏览器**中，不会上传到任何服务器。

## 🚀 快速开始

无需安装、无需联网、无需服务器。

```bash
# 1. 克隆仓库
git clone <仓库地址>
cd todo-app

# 2. 用浏览器打开
open index.html        # macOS
# 或者直接在文件管理器里双击 index.html
```

就这么简单。

## 🛠️ 技术栈

- **HTML5** —— 页面结构
- **CSS3** —— 自定义属性（CSS 变量）、Flexbox 布局
- **原生 JavaScript (ES6+)** —— 逻辑与状态管理
- **Web Storage API** —— `localStorage` 本地持久化

没有 Node、没有 npm、没有打包工具。

## 📂 项目结构

```
todo-app/
├── index.html            # 页面结构（骨架）
├── style.css             # 页面样式（长相）
├── app.js                # 应用逻辑（大脑）
├── README.md             # 项目说明（你正在看）
├── TUTORIAL.md           # Git 命令行实操教程
└── TUTORIAL-VSCODE.md    # VS Code 图形界面 Git 教程
```

## 📚 配套 Git 教程

本项目附带两份手把手教程，二选一即可：

| 教程 | 适合人群 |
|------|----------|
| [`TUTORIAL.md`](./TUTORIAL.md) | 想学**命令行** Git 的人 |
| [`TUTORIAL-VSCODE.md`](./TUTORIAL-VSCODE.md) | 喜欢在 **VS Code 里点按钮**操作的人 |

## 🌐 浏览器兼容性

可在所有现代浏览器中运行（Chrome、Edge、Firefox、Safari）。无需任何 polyfill。

---
## 协议
本项目开源

<div align="center">

用 ❤️ 编写，专为学习 Git 而生。


</div>
