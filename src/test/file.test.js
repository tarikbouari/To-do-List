const addList = require('./addRemove.js');

let array = [];
describe('add and remove', () => {
  // testing add
  test(' add item to list', () => {
    array = addList.add(array, 'test');
    expect(array).toHaveLength(1);

    array = addList.add(array, 'test2');
    expect(array).toHaveLength(2);
  });
});
