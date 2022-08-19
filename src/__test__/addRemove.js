const add = (array, element) => {
  if (element === "") return "invalid input";

  const obj = {
    description: element,
    completed: false,
    index: array.length,
  };
  array.push(obj);

  return array;
};

const remove = (array, index) => {
  array.splice(index, 1);
  return array;
};

const edit = (array, index) => {
  const obj = {
    description: index,
    completed: false,
    index: array.length,
  };

  array.splice(index, 0, obj);
  return array;
};

const clean = (array,element) => {
  const obj = {
    description: element,
    completed: true,
    index: array.length,
  };

  array.push(obj);
  array = array.filter((item) => item.completed === false);
  return array;
};

module.exports = { add, remove, edit, clean };
