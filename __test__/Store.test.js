import Store from '../modules/Store';

describe('Add and Remove test', () => {
  const testData = [{
    description: 'test1',
    completed: false,
    index: 1,
  },
  {
    description: 'test2',
    completed: false,
    index: 2,
  },
  {
    description: 'test3',
    completed: false,
    index: 3,
  }];

  describe('Add Test', () => {
    test('Add list test', () => {
      expect(Store.setLists(testData[0])).toEqual(testData[0]);
    });
    expect(Store.setLists(testData[1])).toEqual(testData[1]);
  });
  test('Add list test', () => {
    expect(Store.setLists(testData[2])).toEqual(testData[2]);
  });

  describe('Remove test', () => {
    test('Remove list test', () => {
      const lists = Store.getLists();
      lists.splice(0, 1);
      expect(Store.deleteLists(1)).not.toEqual(lists[0]);
    });
    test('Remove list test', () => {
      const lists = Store.getLists();
      lists.splice(1, 1);
      expect(Store.deleteLists(2)).not.toEqual(lists[1]);
    });
  });

  describe('Edit/Update test', () => {
    test('update list with a different name test', () => {
      expect(Store.editTask('new')).not.toEqual(Store.getLists());
    });
    test('update list with the same name test', () => {
      expect(Store.editTask('test2')).toEqual(Store.getLists());
    });
  });

  describe('Update index', () => {
    test('check if the index of a task is updated', () => {
      const Lists = Store.getLists();
      const filteredLists = Lists.filter(
        (listItem) => listItem.index !== 1,
      );
      filteredLists.forEach((filteredList, index) => {
        filteredList.index = index + 1;
      });
      expect(filteredLists).toBeDefined();
      expect(filteredLists).toBeDefined();
    });
  });

  describe('Check if task completed', () => {
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

    test('Check if task completed test', () => {
      const local = JSON.parse(localStorage.getItem('Lists'));
      const updatedToDo = local[1 - 1];
      expect(updatedToDo.completed).toEqual(false);
    });
  });
});