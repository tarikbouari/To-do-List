const add = (array, element) => {
  if (element === "") return "invalid input";
  else {
    const obj = {
      description: element,
      completed: false,
      index: array.length,
    };
    array.push(obj);
  }

  return array;
};

const remove = (array, index) => {
  array.splice(index, 1);
  return array;
}
