/* eslint-disable max-classes-per-file */

import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// variables

const toDoList = document.querySelector('.to-do-list');

// classes

class List {
  constructor(description, index) {
    this.description = description;
    this.completed = false;
    this.index = index;
  }
}

class Store {
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

class Ui {
  static addLists = (list) => {
    const toDoList = document.querySelector('.to-do-list');
    const newItem = document.createElement('li');

    newItem.setAttribute('class', 'add-to-list');
    newItem.setAttribute('id', list.index);
    newItem.setAttribute('data-index', list.index);
    newItem.innerHTML = `
      <div data-index="${list.index}" class="checkbox">
        <input  class="strikethrough" type="checkbox">
        <label data-index="${list.index}">${list.description}</label>
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

document.addEventListener('DOMContentLoaded', Ui.DisplayList());

const addInput = document.querySelector('#add-list');
addInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const Lists = Store.getLists();
    const inputValue = document.querySelector('#add-list').value;
    const list = new List(inputValue, Lists.length + 1);
    Store.setLists(list);
    Ui.addLists(list);
  } else {
    return false;
  }
  addInput.value = '';
  return true;
});

// const addBtn = document.getElementById('#add-btn');
// addBtn.addEventListener('click', () => {
//   alert(0);
// })

const checkBoxDiv = document.querySelectorAll('.checkbox');
checkBoxDiv.forEach((el, i) => {
  el.addEventListener('change', () => {
    const List = Store.getLists();
    const checked = document.querySelectorAll('.strikethrough');
    List[i].completed = checked[i].checked;
    localStorage.setItem('Lists', JSON.stringify(List));
  });
});

// remove btn event listener

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const deleted = Number(e.target.dataset.index);
    Store.deleteLists(deleted);
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains('add-btn')) {
    const Lists = Store.getLists();
    const inputValue = document.querySelector('#add-list').value;
    const list = new List(inputValue, Lists.length + 1);
    Store.setLists(list);
    Ui.addLists(list);
  } else {
    return false;
  }
  addInput.value = '';
  return true;
});