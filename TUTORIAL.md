# 🛠️ 手把手 Git 实操教程

> 这份教程带你用刚才学的 Git 知识，亲手管理 `todo-app` 这个真实项目。
> 全程在**终端**里敲命令。每一关都对应课程里的一个概念，做完你就真正"会用"Git 了。

---

## 怎么用这份教程


- 每个 `$` 开头的行，是要你**敲进终端**的命令（不用敲 `$` 本身）。
- 命令下面的灰框，是你**应该看到的输出**（你的可能略有不同，正常）。
- 看到 💡 是"为什么"，看到 ✋ 是"小心/小贴士"，看到 🎯 是"这一关对应课程哪部分"。
- **不用一口气做完**。一关一关来，每关 5 分钟。

### 先打开终端，走进项目文件夹

在 Mac 上打开「终端」(Terminal) app，然后把项目文件夹拖进去前先 `cd` 进去：

```bash
$ cd ~/Desktop/git-teach/todo-app
```

💡 `cd` = change directory（切换目录），就是"走进某个文件夹"。后面所有命令都要在这个文件夹里跑。

✋ 想确认你站对地方了，敲 `pwd`（显示当前路径）和 `ls`（列出文件）。你应该能看到 `index.html`、`app.js` 等文件。

---

## 第 0 关 · 开工前的一次性准备

🎯 *对应课程：模块 1——Git 是你的"存档系统"*

### 0.1 确认 Git 装好了

```bash
$ git --version
```
```
git version 2.39.3 (Apple Git-145)
```

如果显示了版本号，✅ 跳到 0.2。如果提示 "command not found"，先装 Git：敲 `xcode-select --install`，跟着弹窗装完即可。

### 0.2 告诉 Git 你是谁（一辈子只需做一次）

每个存档点都要记录"是谁存的"。第一次用 Git 要先自报家门：

```bash
$ git config --global user.name "你的名字"
$ git config --global user.email "你的邮箱@example.com"
```

💡 `--global` 这个 flag 的意思是"对这台电脑上所有项目都生效"，所以设一次就够，以后不用再设。

✋ 如果你以前设过，这两行会直接覆盖，没关系。想查现在设的是啥：`git config --global user.name`。

---

## 第 1 关 · 建一个"货舱"（git init）

🎯 *对应课程：模块 2——认识 `.git` 文件夹*

现在这个文件夹只是个**普通文件夹**，Git 还不管它。我们来把它"变成一个 Git 项目"：

```bash
$ git init
```
```
Initialized empty Git repository in /Users/.../todo-app/.git/
```

💡 这一下，Git 在文件夹里偷偷建了个隐藏的 `.git` 文件夹——就是课程里说的"**货舱**"。你所有的存档点以后都装在这里面。

✋ 看不到 `.git`？因为它是隐藏的。在终端里敲 `ls -a`（`-a` = 显示全部，包括隐藏文件）就能看到它。**永远别手动删它**（还记得课程里的警告吗）。

### 现在看看 Git 眼里的世界

```bash
$ git status
```
```
On branch main

No commits yet

Untracked files:
  (use "git add <file>..." to include in what will be committed)
        .gitignore
        README.md
        TUTORIAL.md
        app.js
        index.html
        style.css
```

💡 翻译一下这段：
- `On branch main` —— 你在主线 `main` 上（默认就有一条主线）。
- `No commits yet` —— 还一个存档点都没有。
- `Untracked files` —— 这些文件 Git "还不认识"，它们都还待在「**工作区**（家里）」，没上柜台。

---

## 第 2 关 · 创建你的第一个存档点（add + commit）

🎯 *对应课程：模块 3——数据从"家里"流到"货舱"*

还记得托运行李的三步吗？现在我们走一遍：**家里 → 柜台 → 货舱**。

### 2.1 把文件送上柜台（git add）

```bash
$ git add .
```

💡 `.` 代表"当前文件夹里的全部"。这一下，所有文件从「工作区」被送进了「**暂存区**（柜台）」。

✋ 注意 `.gitignore` 在起作用了！它里面写了忽略 `.DS_Store`，所以即使你文件夹里有那个 Mac 系统垃圾文件，它也不会被 add 进来。这就是 `.gitignore` 的用处——让 Git 自动无视你不想管的文件。

### 2.2 确认柜台上都有啥

```bash
$ git status
```
```
On branch main

No commits yet

Changes to be committed:
        new file:   .gitignore
        new file:   README.md
        new file:   app.js
        new file:   index.html
        new file:   style.css
        new file:   TUTORIAL.md
```

💡 文字从红色 `Untracked` 变成了绿色 `Changes to be committed`——它们现在在柜台上，准备打包了。

### 2.3 封箱存档（git commit）

```bash
$ git commit -m "初始版本：能用的待办清单"
```
```
[main (root-commit) a1b2c3d] 初始版本：能用的待办清单
 6 files changed, 220 insertions(+)
```

🎉 **你刚创建了人生第一个存档点！** 那串 `a1b2c3d` 就是它的"身份证号"（哈希指纹的前几位，你的会不一样）。

💡 `-m` 后面那句话就是"提交说明"。写清楚"这次干了啥"，将来的你会感谢现在的你。

### 2.4 看看历史

```bash
$ git log --oneline
```
```
a1b2c3d (HEAD -> main) 初始版本：能用的待办清单
```

💡 这就是你的"项目日记"，目前只有一行。`HEAD -> main` 表示"你现在站在这个存档点上，它在 main 主线的最前端"。

---

## 第 3 关 · 改点东西，再存一档（体验 git diff）

🎯 *对应课程：模块 5——用 `git diff` 看清到底改了什么*

现在来真实地改一处代码，体验完整的"改→看→存"循环。

### 3.1 改一处代码

用任何编辑器（或让 AI 帮你）打开 `index.html`，找到这一行：

```html
<p class="subtitle">一个用来练习 Git 的小项目</p>
```

把它改成：

```html
<p class="subtitle">一个用来练习 Git 的小项目 · 加油！</p>
```

保存文件。

### 3.2 Git 发现你改了

```bash
$ git status
```
```
On branch main
Changes not staged for commit:
        modified:   index.html
```

💡 `modified: index.html` —— Git 注意到这个文件变了，但改动还在「工作区（家里）」，还没上柜台。

### 3.3 看清到底改了哪几行（关键技能！）

```bash
$ git diff
```
```
diff --git a/index.html b/index.html
@@ ... @@
-      <p class="subtitle">一个用来练习 Git 的小项目</p>
+      <p class="subtitle">一个用来练习 Git 的小项目 · 加油！</p>
```

💡 **这就是审查改动的核心技能：**
- `-` 红行 = 原来的样子
- `+` 绿行 = 改成的样子

以后让 AI 改完代码，提交前先 `git diff` 一眼，就能看穿它到底动了什么、有没有偷偷乱改别的地方。

### 3.4 存这一档

```bash
$ git add .
$ git commit -m "副标题加一句鼓励语"
```

### 3.5 你的"火车"现在有两节车厢了

```bash
$ git log --oneline
```
```
f4e5d6c (HEAD -> main) 副标题加一句鼓励语
a1b2c3d 初始版本：能用的待办清单
```

💡 两个存档点串成了一条链（课程里的"火车"比喻）。最新的在最上面。想回到任何一节，报它的编号就行。

---

## 第 4 关 · 开一条"平行宇宙"加新功能（分支）⭐

🎯 *对应课程：模块 4——分支是平行时间线*

这是最有用的一关。我们要给清单加一个**「清除已完成」按钮**，但**不直接在 main 上改**——先开一条安全的分支。

### 4.1 开一条新分支并切过去

```bash
$ git switch -c feature/clear-done
```
```
Switched to a new branch 'feature/clear-done'
```

💡 `switch -c` = 新建一条分支并立刻跳过去（`-c` = create 创建）。分支名叫 `feature/clear-done`，意思是"做清除已完成这个功能"。现在你在一条平行宇宙里，`main` 安然不动。

✋ 想确认你在哪条分支上？敲 `git branch`，当前分支前面会有个 `*`。

### 4.2 真实地加功能（两处改动）

**改动一：** 打开 `index.html`，找到底部这一行：

```html
<span id="counter" class="counter">还有 0 件事要做</span>
```

在它**下面**加一行（变成两行）：

```html
<span id="counter" class="counter">还有 0 件事要做</span>
<button id="clear-done" class="clear-btn">清除已完成</button>
```

**改动二：** 打开 `app.js`，拉到**最底部**，在最后那行 `render();` **之前**，加上这段：

```javascript
// "清除已完成"按钮：一次性删掉所有打了勾的任务
document.getElementById("clear-done").addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  save();
  render();
});
```

保存两个文件。

✋ **现在就在浏览器里试试！** 双击 `index.html` 打开，加几个任务、勾掉几个，点「清除已完成」——勾掉的应该消失了。功能真的能用！

### 4.3 把这个功能存档

```bash
$ git add .
$ git commit -m "加了'清除已完成'按钮"
```

### 4.4 见证奇迹：切回 main，功能"消失"了

```bash
$ git switch main
```
```
Switched to branch 'main'
```

现在**再在浏览器里刷新 `index.html`**——「清除已完成」按钮**不见了**！

💡 这不是 bug，这就是分支的魔法：你的新功能只存在于 `feature/clear-done` 那条平行宇宙里，`main` 这条线上从来没有过它。两条时间线，互不干扰。

### 4.5 满意了，把功能合并回 main

```bash
$ git merge feature/clear-done
```
```
Updating f4e5d6c..9a8b7c6
Fast-forward
 app.js     | 6 ++++++
 index.html | 1 +
 2 files changed, 7 insertions(+)
```

💡 `merge`（合并）= 把那条平行宇宙的成果汇回主线。现在刷新 `index.html`，按钮**回来了**——而且这次是在 `main` 上。

### 4.6 收尾：删掉用完的分支

```bash
$ git branch -d feature/clear-done
```

💡 功能已经合并进 main，这条分支的使命完成了，删掉保持清爽。代码一点没丢，它们已经在 main 里了。

🎉 **你刚完成了职业开发者每天都在做的核心流程：开分支 → 做功能 → 合并 → 删分支。**

---

## 第 5 关 · 后悔药演练（撤销 & 救援）🧯

🎯 *对应课程：模块 6——restore / revert / reflog*

Git 最让人安心的地方，是几乎没有"无法挽回"。我们故意搞两次破坏，再救回来。

### 演练 A：还没提交的改动，一键丢弃（restore）

假装你乱改一通把 `app.js` 改崩了。我们先真的搞乱它——打开 `app.js`，**随便删掉几行**（比如把 `save()` 函数整个删掉），保存。

现在确认你闯祸了：

```bash
$ git status
```
```
Changes not staged for commit:
        modified:   app.js
```

别慌，因为你**还没提交**，可以一键还原：

```bash
$ git restore app.js
```

打开 `app.js` 看看——你删掉的东西**全回来了**！

💡 `git restore` = "把这个文件还原成上次提交时的样子"。还没提交的烂摊子，它一键收拾干净。

### 演练 B：已经提交的烂改动，用 revert 抵消

这次假装你把坏改动**提交**了。先制造一个"坏提交"：打开 `README.md`，在最上面加一行乱码 `xxxx 这是个错误的改动 xxxx`，保存，然后提交：

```bash
$ git add .
$ git commit -m "不小心提交了错误的东西"
```

现在它已经在历史里了。用 `revert` 加一笔"抵消"来撤销它：

```bash
$ git log --oneline
```
先看一眼最上面那个坏提交的编号（假设是 `c1c2c3d`），然后：

```bash
$ git revert c1c2c3d --no-edit
```
```
[main d4d5d6d] Revert "不小心提交了错误的东西"
```

打开 `README.md`——那行乱码**没了**。

💡 `revert` 不是删历史，而是**补一个新提交去抵消旧的**。坏提交和"抵消它的提交"都留在历史里，干干净净、有据可查。这是撤销"已经提交（甚至已 push）"的改动时最安全的方式。`--no-edit` 这个 flag 表示"用默认说明就行，别让我再写一遍"。

### 终极后悔药：reflog

记住一个救命命令就好——万一你（或 AI）一通操作把东西搞丢了：

```bash
$ git reflog
```

它会列出你 HEAD 的**每一步移动**，连"看似删掉、找不回"的提交都还记着编号。找到那个编号，就能跳回去。**这是你绝望时的最后一张底牌。**

---

## 第 6 关（可选）· 连上 GitHub，发布到云端 ☁️

🎯 *对应课程：模块 4——远程仓库、push*

目前你所有存档都只在自己电脑上。想备份 + 分享，把它推到 GitHub：

### 6.1 在 GitHub 上建一个空仓库

1. 登录 [github.com](https://github.com)，点右上角 **+** → **New repository**。
2. 仓库名填 `todo-app`，**不要**勾选 "Add a README"（我们已经有了）。
3. 点 **Create repository**。
4. 复制页面上那个 `https://github.com/你的用户名/todo-app.git` 地址。

### 6.2 把本地仓库和云端连起来

```bash
$ git remote add origin https://github.com/你的用户名/todo-app.git
```

💡 这一步是给云端仓库起个昵称叫 `origin`（课程里讲过）。`remote add` = "记住这个远程仓库"。

### 6.3 推上去

```bash
$ git push -u origin main
```

💡 `push` = 把本地所有提交上传到云端。`-u origin main` 第一次推时设定"以后 `git push` 默认就推到 origin 的 main"，之后你只需敲 `git push` 就行。

刷新 GitHub 页面——你的代码和**全部历史**都在云端了！🎉

✋ 第一次 push 可能让你登录验证身份，跟着提示走即可（现在通常用浏览器授权或 token，不再是密码）。

---

## 📌 速查表：这个项目里你用过的命令

| 命令 | 干什么 |
|------|--------|
| `git init` | 把文件夹变成 Git 项目（建货舱） |
| `git status` | 看现在啥状态（最常用的仪表盘） |
| `git add .` | 把改动送上暂存区柜台 |
| `git commit -m "..."` | 封箱存档，创建一个存档点 |
| `git log --oneline` | 看历史（一条条存档点） |
| `git diff` | 看还没提交的改动具体改了哪些行 |
| `git switch -c 名字` | 新建并切到一条分支 |
| `git switch main` | 切回主线 |
| `git merge 分支名` | 把某条分支合并到当前分支 |
| `git branch -d 名字` | 删掉用完的分支 |
| `git restore 文件` | 丢弃某文件还没提交的改动 |
| `git revert 编号` | 加一个新提交，抵消某个旧提交 |
| `git reflog` | 终极后悔药，找回"丢失"的提交 |
| `git remote add origin 地址` | 连上 GitHub 远程仓库 |
| `git push` | 把本地提交上传到云端 |
| `git pull` | 把云端别人的改动拉到本地 |

---

## 🆘 常见问题

**Q：敲命令后卡在一个奇怪的界面，全是字还退不出来？**
A：多半是误进了编辑器（比如 vim）。按 `Esc`，再依次输入 `:q` 然后回车，就能退出。下次给 commit 加上 `-m "说明"` 就不会进编辑器了。

**Q：`git status` 老提示一个 `.DS_Store`？**
A：确认 `.gitignore` 里有 `.DS_Store` 这一行，并且 `.gitignore` 本身已经被提交过。

**Q：push 时报错 "rejected"？**
A：通常是云端有你本地没有的改动。先 `git pull` 拿下来合并，再 `git push`。记住课程里那句：**先拉后推**。

**Q：彻底乱了，想重来？**
A：先别删项目！试 `git reflog` 找回。实在不行，你本地的 `.git` 文件夹就是完整备份，几乎总有救。

---

## 🎓 你做到了

你刚刚在一个**真实、能跑的项目**上，亲手完成了：

- ✅ 从零建仓库、创建存档点
- ✅ 用 `git diff` 审查改动
- ✅ 开分支加功能、合并、清理（专业开发者的日常）
- ✅ 用 restore / revert / reflog 救场
- ✅ （可选）发布到 GitHub

这套流程，就是你以后指挥 AI、和工程师协作时天天要用的。**回到那门交互课程，现在再看一遍，你会发现每个概念都"活"过来了。**

下一步想挑战？试试给清单再加个功能（比如"编辑任务"或"按完成状态筛选"），全程用分支来做。需要我出下一关，随时说。
