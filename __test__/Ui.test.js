import Ui from '../modules/Ui';
import Store from '../modules/Store';

describe('Ui test', () => {
  document.body.innerHTML = `
  <ul class="to-do-list">
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

  describe('Add to list', () => {
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

  describe('Delete all completed', () => {
    const toDoList = document.querySelector('.to-do-list');
    toDoList.addEventListener('click', (e) => {
      if (e.target.classList.contains('clear-all-completed')) {
        const lists = Store.getLists();
        const incompleted = lists.filter((list) => !list.completed);
        incompleted.forEach((incomplete, index) => {
          incomplete.index = index + 1;
        });
        localStorage.setItem('Lists', JSON.stringify(incompleted));
        const strike = document.querySelectorAll('.strikethrough-completed');
        strike.forEach((strikedLine) => {
          strikedLine.parentElement.parentElement.remove();
        });
      }
    });
    test('delete all completed tasks', () => {
      expect(toDoList.classList.contains('clear-all-completed')).toBeDefined();
    });
  });
});