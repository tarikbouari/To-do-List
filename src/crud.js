import { add, container, inputAdd, form } from "./index.js";
const getLocal = () => {
  const task = JSON.parse(localStorage.getItem("tasks")) || [];
};

const loader = () => {
  const task = JSON.parse(localStorage.getItem("tasks")) || [];
  //   getLocal();
  if (!task) return null;
  else {
    const load = task
      .map(
        (item, i) => ` <div class="flex">
                      <div class="py-3"> 
                      <input type="checkbox" id="description" data-id="${i}">
                      <label for="description" class="mx-3"> ${item.description}</label>
                      </div>
                      <span class="material-symbols-outlined">
                      more_vert
                      </span>
                    </div>`
      )
      .join("");

    container.innerHTML = load;
  }
};

export { getLocal, loader };
