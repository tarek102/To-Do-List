/* eslint-disable max-classes-per-file */

import './style.css';
import Store from '../modules/Store';
import Ui from '../modules/Ui';
import List from '../modules/List';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// variables

const toDoList = document.querySelector('.to-do-list');

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

const deleteAll = document.querySelector('.clear-all-list');
deleteAll.addEventListener('click', () => {
  console.log(0);
});
