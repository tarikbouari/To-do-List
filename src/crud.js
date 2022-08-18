export default class List {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }

  addToList() {
    const task = JSON.parse(localStorage.getItem('tasks')) || [];
    const listArr = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };
    task.push(listArr);
    localStorage.setItem('tasks', JSON.stringify(task));
  }
}

const remove = (index) => {
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTasks = task.filter((item) => item.index !== index);

  newTasks.map((item, index) => {
    item.index = index + 1;
    return item;
  });

  localStorage.setItem('tasks', JSON.stringify(newTasks));
  window.location.reload();
};

const updateTask = (index, newInput) => {
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  const newTasks = task.filter((item) => item.index !== index);

  const newTask = new List(newInput.value, index);
  newTasks.splice(index - 1, 0, { ...newTask });
  localStorage.setItem('tasks', JSON.stringify(newTasks));
  document.location.reload();
};

const cleanAll = () => {
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  let taskArr = task.filter((item) => item.completed !== true);
  taskArr = taskArr.map((item, index) => {
    item.index = index + 1;
    return item;
  });
  localStorage.setItem('tasks', JSON.stringify(taskArr));
  document.location.reload();
};

const editTask = (index) => {
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  const taskArr = task[index - 1];
  const element = document.getElementById(index);
  element.style.backgroundColor = 'rgba(0, 0, 255, 0.1)';
  element.innerHTML = '';
  const newInput = document.createElement('input');
  newInput.classList.add('newInput');
  newInput.type = 'text';
  newInput.value = taskArr.description;

  newInput.addEventListener('focusout', () => {
    updateTask(index, newInput);
  });

  const removIcon = document.createElement('span');
  removIcon.classList.add('material-symbols-outlined', 'btn');
  removIcon.textContent = 'delete';

  removIcon.addEventListener('click', () => {
    remove(index);
    document.location.reload();
  });

  element.append(newInput, removIcon);
};

export {
  updateTask, remove, editTask, cleanAll,
};
