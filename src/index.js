import "./style.css";
import { getLocal, loader } from "./action.js";
export const add = document.getElementById("send");
export const container = document.getElementById("task");
export const inputAdd = document.getElementById("add");
export const form = document.getElementById("form");

export default class List {
  constructor(description, completed = false, index) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  addToList() {
    const task = JSON.parse(localStorage.getItem("tasks")) || [];
    const listArr = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };

    task.push(listArr);
    localStorage.setItem("tasks", JSON.stringify(task));
  }
}

document.addEventListener("DOMContentLoaded", loader());

add.addEventListener("click", (e) => {
  e.preventDefault();
  const desValue = inputAdd.value;
  if (!desValue) return "value missing";

  const newList = new List(desValue);
  newList.addToList();
  loader();
  return form.reset();
});
