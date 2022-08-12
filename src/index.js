import './style.css';
import List, { editTask } from './crud.js';

export const add = document.getElementById('send');
export const inputAdd = document.getElementById('add');
export const form = document.getElementById('form');

const loader = () => {
  const container = document.getElementById('task');
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  if (!task) return null;
  task.forEach((item) => {
    const div = document.createElement('div');
    const checkBox = document.createElement('input');
    const p = document.createElement('p');
    const icon = document.createElement('span');
    const label = document.createElement('label');

    div.setAttribute('id', item.index);
    div.classList.add('element', 'flex');
    checkBox.type = 'checkbox';
    checkBox.id = 'check';
    checkBox.name = 'check';
    checkBox.checked = false;

    p.classList.add('paragraph', 'py-3');
    label.for = 'check';
    label.classList.add('mx-3');
    label.innerHTML = item.description;

    icon.classList.add('material-symbols-outlined');
    icon.textContent = 'more_vert';
    icon.addEventListener('click', () => {
      editTask(item.index);
    });

    p.append(checkBox, label);
    div.append(p, icon);
    div.classList.add('task');

    container.appendChild(div);
  });
  return container;
};

document.addEventListener('DOMContentLoaded', loader());

add.addEventListener('click', (e) => {
  const task = JSON.parse(localStorage.getItem('tasks')) || [];
  e.preventDefault();
  const desValue = inputAdd.value;
  if (!desValue) return 'value missing';
  const taskIndex = task.length + 1;
  const newList = new List(desValue, taskIndex);
  newList.addToList();
  loader();
  document.location.reload();
  return form.reset();
});
