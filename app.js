// ===== 待办清单 · 逻辑 =====
// 这个文件管理所有任务：添加、勾选、删除，并把数据存进浏览器。

// 从浏览器的本地存储里读出之前存的任务（没有就给个空数组）
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// 抓住页面上的几个元素，后面要用
const form = document.getElementById("add-form");
const input = document.getElementById("task-input");
const list = document.getElementById("task-list");
const counter = document.getElementById("counter");

// 把任务存回浏览器（这样刷新页面也不会丢）
function save() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// 把 tasks 数组重新画到页面上
function render() {
  list.innerHTML = "";

  if (tasks.length === 0) {
    list.innerHTML = '<li class="empty">还没有任务，加一个吧！</li>';
  }

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task-item" + (task.done ? " done" : "");

    li.innerHTML = `
      <input type="checkbox" class="task-checkbox" ${task.done ? "checked" : ""}>
      <span class="task-text">${task.text}</span>
      <button class="delete-btn" title="删除">×</button>
    `;

    // 勾选 / 取消勾选
    li.querySelector(".task-checkbox").addEventListener("change", () => {
      tasks[index].done = !tasks[index].done;
      save();
      render();
    });

    // 删除
    li.querySelector(".delete-btn").addEventListener("click", () => {
      tasks.splice(index, 1);
      save();
      render();
    });

    list.appendChild(li);
  });

  // 更新底部计数
  const remaining = tasks.filter((t) => !t.done).length;
  counter.textContent = `还有 ${remaining} 件事要做`;
}

// 提交表单（点"添加"或按回车）时，新增一个任务
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;

  tasks.push({ text: text, done: false });
  save();
  render();

  input.value = "";
  input.focus();
});

// 页面一打开，先画一次
document.getElementById("clear-done").addEventListener("click", () => {
  tasks = tasks.filter((t) => !t.done);
  save();
  render();
});
render();
