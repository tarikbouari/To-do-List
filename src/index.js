import "./style.css";
import List from "./class.js";
export const arr = [
  {
    description: " Submit list project one1",
    completed: true,
    index: "1",
  },
  {
    description: " Setup webpack file ",
    completed: true,
    index: "2",
  },
  {
    description: "Get project approved ",
    completed: false,
    index: "3",
  },
];

const add = document.getElementById("send");
const container = document.getElementById("task");
const inputAdd = document.getElementById("add");
const form = document.getElementById("form");

const loader = () => {
  const load = arr
    .map((item, i) => {
      return ` <div class="flex">
                  <div class="py-3"> 
                  <input type="checkbox" id="description">
                  <label for="description" class="mx-3"> ${item.description}</label>
                  </div>
                  <span class="material-symbols-outlined">
                  more_vert
                  </span>
                </div>`;
    })
    .join("");

  container.innerHTML = load;
};

loader();

add.addEventListener("click", (e) => {
  e.preventDefault();
  console.log(true);
  let desValue = inputAdd.value;
  if (!desValue) return "value missing";

  let newList = new List(desValue);
  newList.addToList();
  loader();
  form.reset();
});
