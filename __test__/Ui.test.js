import Ui from '../modules/Ui';

describe('Ui test', () => {
  test('Add list test', () => {
    const toDoList = document.querySelector('.to-do-list');
    Ui.addLists('hi');
    expect(toDoList.childNodes.length).toBe(8);
  });
  test('Add list test', () => {
    const toDoList = document.querySelector('.to-do-list');
    Ui.addLists('hi');
    expect(toDoList.childNodes.length).toBe(9);
  });
});