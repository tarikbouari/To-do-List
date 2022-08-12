

const getLocal = () => {
    const task = JSON.parse(localStorage.getItem("tasks")) || [];
  };
  
  const loader = () => {
    getLocal();
    if (!task) return null;
  
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
  };


  const addToList = () => {
    getLocal();
    const listArr = {
      description: this.description,
      completed: this.completed,
      index: this.index,
    };
  
    task.push(listArr);
    localStorage.setItem("form", JSON.stringify(this.data));
  };



  export { addToList, getLocal, loader};