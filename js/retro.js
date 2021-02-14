// get all elements

const addTodoBtn = document.querySelector('#add-todo');
const addTodoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoUL = document.querySelector('#w3-todo-list');
const todoRemove = document.querySelector('.delete-item');

// load all functions

loadAllFunctions();

function loadAllFunctions() {
    addTodoBtn.addEventListener('click', addTodo);
    todoInput.addEventListener("keyup", activateEnterBtn);
    todoUL.addEventListener('click', removeTask);
}

// Activate add button and alert dismiss using Enter key 
function activateEnterBtn(e) {
  // Number 13 is the "Enter" key on the keyboard
  if (e.keyCode === 13) {
    // Cancel the default action, if needed
    e.preventDefault();
    // Trigger the button element with a click
    addTodoBtn.click();
  }
};

// add todo = create new li item

function addTodo() {
    // create li element
    let li = document.createElement('li');
    // style li
    li.className = 'nes-container bg-yellow d-flex fs-3 fw-bold mb-2 p-3';
    // get value from input field
    let inputValue = todoInput.value;
    // create text node for li + input value
    let todoItem = document.createTextNode(inputValue);
    li.appendChild(todoItem); 

    // create close btn
    const closeBtn = document.createElement('a');
    closeBtn.className = 'delete-item ms-auto';
    closeBtn.innerHTML = `<span class="delete-item fs-4">X</span>`;
    li.appendChild(closeBtn); 

    // create an alert if user clicks add btn with no todo
    if(inputValue === '') {
        alert("Please input a task!");
        return;
    } else {
        todoUL.appendChild(li);
    }
    // clear input after adding task
    todoInput.value = '';
} 

// remove todo

// because there are no task items on first load, the element .delete-item doesn't exist and will throw an error; so you have to check first if the parent element [the ul] contains the delete-item class/element, THEN perform an action

function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure you want to delete this task?")) {
                e.target.parentElement.parentElement.remove();
        }
    }
}

// mark todo done

todoUL.addEventListener('click', checked);
function checked(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('task-done');
    }
}