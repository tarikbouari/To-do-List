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

  test('test remove', () => {
    array = addList.remove(array, 1);
    expect(array).toHaveLength(1);
  });

  test('update array', () => {
    array = addList.edit(array, 1);
    expect(array).toHaveLength(2);
  });

  test('filter array', () => {
    array = addList.clean(array, 1);
    expect(array).toHaveLength(2);
  });

  test('change status', () => {
    expect().toBeFalsy();
    array = addList.update(array, 1);
    expect(array).toBeTruthy();
  });
});
