export default class Store {
  static getLists = () => {
    let Lists;
    if (localStorage.getItem('Lists') === null) {
      Lists = [];
    } else {
      Lists = JSON.parse(localStorage.getItem('Lists'));
    }
    return Lists;
  }

  static setLists = (list) => {
    const Lists = this.getLists();
    Lists.push(list);
    localStorage.setItem('Lists', JSON.stringify(Lists));
  }

  static deleteLists = (deleted) => {
    const Lists = this.getLists();
    const filteredLists = Lists.filter(
      (listItem) => listItem.index !== deleted,
    );

    // update index of list

    filteredLists.forEach((filteredList, index) => {
      filteredList.index = index + 1;
    });
    localStorage.setItem('Lists', JSON.stringify(filteredLists));
  }
}