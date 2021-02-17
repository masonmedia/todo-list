// get elements
// 1. add button + enter key
// 2. input value + alert if empty
// 3. ul where item will be added
// 4. remove button
// 5. add checked/done class
// 6. load all eventlisteners

// get elements
const addBtn = document.querySelector('#add-btn');
const todoInput = document.querySelector('#input-value');
const todoList = document.querySelector('#todo-list');
const removeItem = document.querySelector('.delete-item');

loadAllEventListeners();

function loadAllEventListeners() {
    addBtn.addEventListener('click', addTodo);
    // add todo using enter button
    todoInput.addEventListener('keydown', addUsingEnter);
    // have to add the addEventListener to the parentElement ul, not the removeItem element
    todoList.addEventListener('click', removeTodoItem);
    todoList.addEventListener('click', checked);
}

function addUsingEnter(e) {
    // if clicking enter key #13, then cancel default action, and trigger add task button
    if(e.keyCode === 13) {
        e.preventDefault();
        // activate addBtn
        addBtn.click();
    } 
}

// add todo item
function addTodo() {
    // create + style an li element to contain the todo item value
    let li = document.createElement('li');
    li.className = "d-flex flex-column justify-content-center align-items-start bg-lavender relative p-5 m-2 fs-5 fw-bold shadow";
    // get the user input value
    let inputValue = todoInput.value;
    // create a text node to contain the input value
    let todoItem = document.createTextNode(inputValue);
    // append the text node to the li
    li.appendChild(todoItem);

    let dt = document.createElement('span');
    dt.className = "d-block fw-lighter border-top border-dark mt-1 pt-2 small";
    dt.innerHTML = date_string;
    li.appendChild(dt);

    let col = document.createElement('div');
    col.className = "col p-5 bg-blush shadow "

    
    // create a close btn
    // create Element
    // add Styles
    // add innerHTML/content
    // append element to li
    let closeBtn = document.createElement('a');
    closeBtn.className = "delete-item fs-5 fw-light d-flex ms-auto";
    closeBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
    </svg>`;
    li.appendChild(closeBtn);

    // create checked checkmark icon
    let checkMark = document.createElement('span');
    checkMark.className = "check-item fs-5 fw-light";
    checkMark.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-check2-circle rounded-circle" viewBox="0 0 16 16">
    <path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"/>
    <path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"/>
    </svg>`;
    li.appendChild(checkMark);

    // removes any whitespace between input values (i.e. if a task has multiple words); assigning the inputValue to the modal id creates a unique ID for each task, and as such a unique modal; but IDs can't have whitespace, so it needs to be removed to create a string

    // remove whitespace in user input value to apply value to modal ID
    // const modalId = inputValue.replace(/\s/g,''); 

    // remove all characters other than letters in user input value
    const modalId = inputValue.replace(/[^a-zA-Z0-9]/g, ''); 

    // https://stackoverflow.com/questions/6555182/remove-all-special-characters-except-space-from-a-string-using-javascript
    // console.log(str.replace(/[^a-zA-Z ]/g, ""));    

    // add modal for each task to write additional notes
    let notesModal = document.createElement('span');
    notesModal.innerHTML = `
        <button type="button" class="btn btn-outline-dark mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">
        notes
        </button>
        <div class="modal fade" id="${modalId}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content bg-blush text-midnight">
                <div class="modal-header border-0">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-edit bg-lavender p-2 me-2 rounded-circle shadow" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.5" stroke="midnightblue" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3" />
                        <path d="M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3" />
                        <line x1="16" y1="5" x2="19" y2="8" />
                    </svg>
                    <h5 class="modal-title" id="${inputValue}">${inputValue} details</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
            <div class="modal-body">
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Write notes here" id="floatingTextarea2" style="height: 200px;"></textarea>
                    <label for="floatingTextarea2" class="mb-3 fw-light" style="color: grey; font-size: 16px;">Write notes here...</label>
                </div>
            </div>
            <div class="modal-footer border-0">
                <button type="button" class="btn bg-lavender text-midnight shadow" data-bs-dismiss="modal">Close</button>
            </div>
            </div>
        </div>
        </div>`
        li.appendChild(notesModal);

    // create an alert if there is no input value
    if(inputValue === '') {
        alert("Please input a task!");
        return;
    } else {
        todoList.appendChild(li);
    }
    // clear the input field after adding item
    todoInput.value = '';
}

// add checked class

// add event listener to the ul to add checked class to todo items
todoList.addEventListener('click', checked);
function checked(e) {
    // check if li item exists
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('checked');
    }
}

// remove todo onclick

function removeTodoItem(e) {
    // check if the delete-item class exists on any li item (if you don't check first, there will be an error as there are no items yet in the DOM with this class until the user adds items)
    if(e.target.parentElement.classList.contains('delete-item')) {
        e.target.parentElement.parentElement.remove();
    }
}

// create date and append to task item

var date = new Date();

// ensure date comes as 01, 09 etc
var DD = ("0" + date.getDate()).slice(-2);

// getMonth returns month from 0
var MM = ("0" + (date.getMonth() + 1)).slice(-2);

var YYYY = date.getFullYear();

var hh = ("0" + date.getHours()).slice(-2);

var mm = ("0" + date.getMinutes()).slice(-2);

var ss = ("0" + date.getSeconds()).slice(-2);

// var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm + ":" + ss;
var date_string = YYYY + "-" + MM + "-" + DD + " " + hh + ":" + mm;

const newDate = Date.now();
// will output something like "2019-02-14 11:04:42"

// create random string as id for modals -- this didn't work because the enter key doesn't trigger a new event; so it would have to rely on the "Add btn" only;
const random = (length = 8) => {
    // Declare all characters
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    // Pick characters randomly
    let str = '';
    for (let i = 0; i < length; i++) {
        str += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    return str;

};

const rand = Math.random().toString(16).substr(2, 8); // 6de5ccda
console.log(rand);

// get simple-todo url to change nav color

// window.location.pathname 

const simpleTodo = window.location.pathname;
console.log(simpleTodo);

if(simpleTodo == '/simple.html') {
    // let nav = document.getElementsByTagName('nav')
    // nav.classList.remove('bg-light');
    // // nav.classList.add('bg-midnight', 'navbar-dark');
    document.querySelector('body').style.background = "pink";
    document.querySelector('.navbar').classList.remove('bg-light', 'navbar-light');
}


// todoInput.forEach(function(){
//     // var value = this.val();
//     if (todoList.indexOf(todoInput) == -1) {
//         todoList.push(todoInput);
//     }
//     else {
//         this.alert("duplicate");
//     }
// });




  

