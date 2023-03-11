const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');
const taskCount = document.getElementById('taskCount');

let tasks = [];


function renderTasks() {

  
  taskList.innerHTML = '';
  for (let i = 0; i < tasks.length; i++) {
    const task = tasks[i];
    const li = document.createElement('li');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => {
      task.completed = checkbox.checked;
      renderTasks();
    });
    const span = document.createElement('span');
    span.textContent = task.text;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => {
      tasks.splice(i, 1);
      renderTasks();
    });
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteButton);
    if (task.completed) {
      li.classList.add('completed');
    }
    taskList.appendChild(li);
  }
  taskCount.textContent = tasks.length;
}

// function to add a new task
function addTask(text) {
  tasks.push({
    text,
    completed: false
  });
  renderTasks();
}


// handle the form submission
addButton.addEventListener('click', (event) => {
  event.preventDefault();
  const text = taskInput.value.trim();
  if (text !== '') {
    addTask(text);
    taskInput.value = '';
  }
  
});







// The first block of code consists of variables and functions to manage a to-do list. Here's an explanation of each line:

// javascript
// Copy code
// const taskInput = document.getElementById('taskInput');
// const addButton = document.getElementById('addButton');
// const taskList = document.getElementById('taskList');
// const taskCount = document.getElementById('taskCount');
// taskInput, addButton, taskList, and taskCount are all constant variables declared using the const keyword and assigned values using the document.getElementById() method to retrieve elements with corresponding IDs from the DOM.
// javascript
// Copy code
// let tasks = [];
// tasks is an empty array that will be used to store task objects.
// javascript
// Copy code
// function renderTasks() {
// renderTasks() is a function that will be called whenever the task list needs to be updated.
// python
// Copy code
// taskList.innerHTML = '';
// The innerHTML property of the taskList element is set to an empty string to clear the list of any existing tasks.
// javascript
// Copy code
// for (let i = 0; i < tasks.length; i++) {
//   const task = tasks[i];
//   const li = document.createElement('li');
//   const checkbox = document.createElement('input');
//   checkbox.type = 'checkbox';
//   checkbox.checked = task.completed;
//   checkbox.addEventListener('change', () => {
//     task.completed = checkbox.checked;
//     renderTasks();
//   });
//   const span = document.createElement('span');
//   span.textContent = task.text;
//   const deleteButton = document.createElement('button');
//   deleteButton.textContent = 'Delete';
//   deleteButton.addEventListener('click', () => {
//     tasks.splice(i, 1);
//     renderTasks();
//   });
//   li.appendChild(checkbox);
//   li.appendChild(span);
//   li.appendChild(deleteButton);
//   if (task.completed) {
//     li.classList.add('completed');
//   }
//   taskList.appendChild(li);
// }
// A for loop is used to iterate through each task object in the tasks array.
// For each task object, a new li element is created using document.createElement().
// A new input element of type checkbox is created using document.createElement().
// The checked property of the checkbox element is set to the value of the completed property of the current task object.
// An event listener is added to the checkbox element that updates the completed property of the current task object and calls renderTasks() to update the task list.
// A new span element is created using document.createElement() and its textContent property is set to the text property of the current task object.
// A new button element is created using document.createElement() and its textContent property is set to 'Delete'.
// An event listener is added to the deleteButton element that removes the current task object from the tasks array using the splice() method and calls renderTasks() to update the task list.
// The checkbox, span, and deleteButton elements are appended to the li element using li.appendChild().
// If the completed property of the current task object is true, the completed class is added to the li element using li.classList.add().
// The li element is appended to the taskList element using taskList.appendChild().
// Copy code
// taskCount.textContent = tasks.length;
// The textContent property of the taskCount element is set to the length of the tasks array.
// scss
// Copy code
// function addTask(text) {
//   tasks.push({
//     text,
//     completed: false
//   });
//   renderTasks();
// }
// `
