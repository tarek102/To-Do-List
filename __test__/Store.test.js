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
    expect(Store.setLists(testData[1])).toEqual(testData[1])
    })
    test('Add list test', () => {
      expect(Store.setLists(testData[2])).toEqual(testData[2])
    })
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
