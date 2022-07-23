/* eslint-disable max-classes-per-file */
import List from '../modules/List';
import Store from '../modules/Store';
import Ui from '../modules/Ui';
import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

// variables

const toDoList = document.querySelector('.to-do-list');
const addInput = document.querySelector('#add-list');

document.addEventListener('DOMContentLoaded', Ui.DisplayList());

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

// remove btn event listener

toDoList.addEventListener('click', (e) => {
  if (e.target.classList.contains('remove-btn')) {
    const i = Number(e.target.dataset.index);
    Store.deleteLists(i);
    e.target.parentElement.remove();
  }

  if (e.target.classList.contains('checkbox-input')) {
    const index = Number(e.target.dataset.index);
    e.target.nextElementSibling.classList.toggle('strikethrough-completed');
    const local = JSON.parse(localStorage.getItem('Lists'));
    const updatedToDo = local[index - 1];
    updatedToDo.completed = !updatedToDo.completed;
    localStorage.setItem('Lists', JSON.stringify(local));
  }

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

  if (e.target.classList.contains('checkbox-label')) {
    const parent = e.target.parentElement;
    const index = Number(e.target.dataset.index);
    const lists = Store.getLists();
    const editInput = document.createElement('input');
    editInput.setAttribute('type', 'text');
    editInput.setAttribute('class', 'edit-label');
    parent.removeChild(e.target);
    parent.appendChild(editInput);
    editInput.addEventListener('keypress', (el) => {
      if (el.key === 'Enter') {
        lists[index - 1].description = editInput.value;
        localStorage.setItem('Lists', JSON.stringify(lists));
        editInput.value = '';
        parent.removeChild(editInput);
        const editedLabel = document.createElement('label');
        editedLabel.innerHTML = `${lists[index - 1].description}`;
        parent.appendChild(editedLabel)
      }
    })
    
        console.log(lists);

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
