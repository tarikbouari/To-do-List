const add = (array, element) => {
  if (element === '') return 'invalid input';

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

const update = (index, array) =>{

const obj = {
  description: element,
    completed: false,
    index: array.length,
  };

  array.splice(index, 0, obj);
  return array

}
export { add, remove, update };