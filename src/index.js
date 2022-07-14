import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';

const toDoList = document.querySelector('.to-do-list');
const listItems = [
  {
    description: 'Feed the dog',
    completed: false,
    index: 0,
  },
  {
    description: 'Make breakfast',
    completed: false,
    index: 0,
  },
  {
    description: 'Get grocery',
    completed: false,
    index: 0,
  },
];

listItems.forEach((item) => {
  const newItem = document.createElement('li');
  newItem.innerHTML = `
    <div>
    <input type="checkbox" class="items-list"> 
    <label for="vehicle1"> ${item.description}</label><br>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;

  toDoList.appendChild(newItem);
});
