import Store from './Store';

export default class Ui {
  static addLists = (list) => {
    const toDoList = document.querySelector('.to-do-list');
    const newItem = document.createElement('li');

    newItem.setAttribute('class', 'add-to-list');
    newItem.setAttribute('id', list.index);
    newItem.setAttribute('data-index', list.index);
    newItem.innerHTML = `
      <div data-index="${list.index}" class="checkbox">

        <input data-index="${list.index}" type="checkbox" ${list.completed ? 'checked' : ''} class="checkbox-input">
        <label class="checkbox-label ${list.completed ? 'strikethrough-completed' : ''}" data-index="${list.index}">${list.description}</label>
        
      </div>
      <i data-index="${list.index}" class="fa-solid fa-trash-can remove-btn"></i>
      `;
    toDoList.appendChild(newItem);
  }

  static DisplayList = () => {
    const Lists = Store.getLists();
    Lists.forEach((list) => {
      this.addLists(list);
    });
  }
}