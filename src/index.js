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
    index: 1,
  },
  {
    description: 'Get grocery',
    completed: false,
    index: 2,
  },
];

for (let i = 0; i < listItems.length; i += 1) {
  const newItem = document.createElement('li');
  newItem.setAttribute('id', i);
  newItem.innerHTML = `
    <div>
    <input type="checkbox" class="items-list"> 
    <label> ${listItems[i].description}</label><br>
    </div>
    <i class="fa-solid fa-ellipsis-vertical"></i>
    `;
  toDoList.appendChild(newItem);
}

// listItems.forEach((item) => {
//   count++;
//   const newItem = document.createElement('li');
//   newItem.setAttribute('id', count - 1)
//   newItem.innerHTML = `
//     <div>
//     <input type="checkbox" class="items-list">
//     <label> ${item.description}</label><br>
//     </div>
//     <i class="fa-solid fa-ellipsis-vertical"></i>
//     `;

//   toDoList.appendChild(newItem);
// });

const clearCompletedBtn = document.createElement('li');
clearCompletedBtn.classList.add('clear-completed');
clearCompletedBtn.innerHTML = `
  <span>Clear all completed</span>
`;

toDoList.appendChild(clearCompletedBtn);
