// traversy todo app

// define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.list-unstyled');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// load all event listeners
loadEventListeners();

// load all event listeners
function loadEventListeners() {
    // add task event
    form.addEventListener('submit', addTask);
    // remove task event
    taskList.addEventListener('click', removeTask);
    // clear all tasks
    clearBtn.addEventListener('click', clearTasks);
    // filter tasks
    filter.addEventListener('keyup', filterTasks);
}

// function to add a task 
function addTask(e) {
    if(taskInput.value === '') {
        alert("Add a task!");
        return;
    }

    // create li task item
    const li = document.createElement('li');
    // add class
    li.className = 'collection-item d-flex align-items-center fw-light fs-5 alert alert-info alert-dismissable fade show mb-1';
    // create text node for value taken from typed input
    li.appendChild(document.createTextNode(taskInput.value));
    
    // add BS dismiss button to alert li
    // const btn = document.createElement('button');
    // btn.className = 'btn-close ms-auto';
    // btn.setAttribute('data-bs-dismiss','alert'); 
    // li.appendChild(btn);

    // Create new icon/link element for dismissal
    const link = document.createElement('a');
    link.className = 'delete-item d-flex ms-auto fs-4';
    // add icon html 
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // append icon/link to li
    li.appendChild(link);
    // append li to ul
    taskList.appendChild(li);

    // clear input
    taskInput.value = '';
    e.preventDefault();
}

// mark task completed

    taskList.addEventListener('click', function(e) {
        if (e.target.tagName === 'LI') {
            // e.target.classList.toggle('checked');
            e.target.classList.toggle('checked');
        }
    }, false);

// remove task from list
function removeTask(e) {
    if(e.target.parentElement.classList.contains('delete-item')) {
        if(confirm("Are you sure you want to delete this task?")) {
            e.target.parentElement.parentElement.remove();
        }
    }
}

// clear entire task list
function clearTasks(e) {
    taskList.innerHTML = '';
    e.preventDefault();
}

// filter tasks

function filterTasks(e) {
    const text = e.target.value.toLowerCase();
    console.log(text);
    document.querySelectorAll('.alert').forEach
    (function(task) {
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1) {
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    })
}