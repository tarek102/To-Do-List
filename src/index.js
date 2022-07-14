import './style.css';
import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';


const toDoList = document.querySelector('.to-do-list');
const listItems = [];


// functions

const addInput = document.querySelector('#add-list');
// function addItem(e) { 
  
  
  
//   console.log(listItems);

// }

addInput.addEventListener('keypress', function(e){
  if(e.key === 'Enter') {
    if(addInput.value !== ''){
      let newObj = {
        description: addInput.value,
        completed: false,
        index: listItems.length
      };
      listItems.push(newObj);
    }
    addInput.value = '';
  } else {
    // e.preventDefault();
    return false;
  }
  
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
});



console.log(listItems);