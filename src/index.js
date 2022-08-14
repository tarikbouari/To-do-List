import "./style.css";
import List, { editTask, cleanAll } from "./crud.js";
import state from "./interactive.js";

export const add = document.getElementById("send");
export const inputAdd = document.getElementById("add");
export const form = document.getElementById("form");
const cleanBtn = document.getElementById("clean");

const task = JSON.parse(localStorage.getItem("tasks")) || [];
const loader = () => {
  const container = document.getElementById("task");
  if (!task) return null;
  task.forEach((item) => {
    const div = document.createElement("div");
    const checkBox = document.createElement("input");
    const p = document.createElement("p");
    const icon = document.createElement("span");
    const label = document.createElement("label");

    div.setAttribute("id", item.index);
    div.classList.add("element", "flex", "py-2");
    checkBox.type = "checkbox";
    checkBox.id = "check";
    checkBox.name = "check";
    // checkBox.checked = false;
    checkBox.addEventListener("change", () => {
      state(item.index);
    });

    p.classList.add("paragraph", "mx-3");
    label.for = "check";
    label.classList.add("mx-3");
    label.innerHTML = item.description;
    if (item.completed) {
      label.style.textDecoration = "line-through";
      label.style.color = "rgb(124,123,123)";
      checkBox.checked = true;
    }

    icon.classList.add("material-symbols-outlined");
    icon.textContent = "more_vert";
    icon.addEventListener("click", () => {
      editTask(item.index);
    });

    p.append(checkBox, label);
    div.append(p, icon);
    div.classList.add("task");

    container.appendChild(div);
  });
  return container;
};

document.addEventListener("DOMContentLoaded", loader());
cleanBtn.addEventListener("click", (e) => {
  e.preventDefault();
  cleanAll();
});

add.addEventListener("click", (e) => {
  const task = JSON.parse(localStorage.getItem("tasks")) || [];
  e.preventDefault();
  const desValue = inputAdd.value;
  if (!desValue) return "value missing";
  const taskIndex = task.length + 1;
  const newList = new List(desValue, taskIndex);
  newList.addToList();
  loader();
  document.location.reload();
  return form.reset();
});
