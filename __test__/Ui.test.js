import Ui from '../modules/Ui';

describe('Ui test', () => {
  document.body.innerHTML = `<ul class="to-do-list">
  <li class="list-head">
      <h3>Today's To Do</h3>
      <i class="fa-solid fa-arrows-rotate"></i>
  </li>
  <li>
    <input type="text" id="add-list" placeholder="Add to your list">
    <i class="fa-solid fa-right-to-bracket add-btn" id="add-btn"></i>        
  </li>
  <li class="clear-completed"><span class="clear-all-completed">Clear all completed</span></li>
</ul>`;

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