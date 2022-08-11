import { arr } from "./index.js";

export default class List {
  constructor(description, completed = false, i = 0) {
    this.description = description;
    this.completed = completed;
    this.index = i;
  }

  addToList() {
    const listArr = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };

    arr.push(listArr);
  }
}
