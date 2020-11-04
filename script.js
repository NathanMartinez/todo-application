const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('add')
const editButton = document.getElementById('edit')
const deleteButton = document.getElementById('delete')
const todoContainer = document.getElementById('todo-container')

// window.addEventListener('keypress', e => getInputText(e))
addButton.addEventListener('click', e => getInputText(e, true))

function getInputText() {
  const newTodoText = todoInput.value
  addTodo(newTodoText)
  todoInput.value = ''
}

function addTodo(todoText) {
  let todo = document.createElement('div')
  todo.classList.add('todo')
  todo.innerHTML = ` <input value="${todoText}" id="todo-text" type="text" autocomplete="off" readonly>
  <button id="edit" type="button">Edit</button>
  <button id="delete" type="button">Delete</button>`
  todoContainer.appendChild(todo)
}