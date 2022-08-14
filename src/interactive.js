let task = JSON.parse(localStorage.getItem('tasks')) || [];

export default (index) => {
  task = task.map((item) => {
    if (item.index === index) {
      const currentState = item.completed;
      if (currentState) {
        item.completed = false;
      } else {
        item.completed = true;
      }
    }
    return item;
  });
  localStorage.setItem('tasks', JSON.stringify(task));
  document.location.reload();
};
