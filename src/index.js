import './style.css';

const arr = [
  {
    description: ' Submit list project one1',
    completed: true,
    index: '1',
  },
  {
    description: ' Setup webpack file ',
    completed: true,
    index: '2',
  },
  {
    description: 'Get project approved ',
    completed: false,
    index: '3',
  },
];

const add = document.getElementById('send');
const container = document.getElementById('task');
const inputAdd = document.getElementById('add');
const form = document.getElementById('form');

const loader = () => {
  const load = arr
    .map(
      (item, i) => ` <div class="flex">
                  <div class="py-3"> 
                  <input type="checkbox" id="description" data-id="${i}">
                  <label for="description" class="mx-3"> ${item.description}</label>
                  </div>
                  <span class="material-symbols-outlined">
                  more_vert
                  </span>
                </div>`,
    )
    .join('');

  container.innerHTML = load;
};

loader();

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

add.addEventListener('click', (e) => {
  e.preventDefault();
  const desValue = inputAdd.value;
  if (!desValue) return 'value missing';

  const newList = new List(desValue);
  newList.addToList();
  loader();
  return form.reset();
});
