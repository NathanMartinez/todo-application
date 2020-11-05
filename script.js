const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('add')
const todoContainer = document.getElementById('todo-container')

const todos = []

window.addEventListener('keypress', e => getInputText(e))
addButton.addEventListener('click', e => getInputText(e))
// if (todos.length > 0) {
//   deleteButton.addEventListener('click', e => deleteTodo(e))
//   editButton.addEventListener('click', e => editTodo(e))
// }

function getInputText(e) {
  const newTodoText = todoInput.value
  if (e.code === 'Enter' || e.target.classList[0] === 'fas') {
    addTodo(newTodoText)
    todoInput.value = ''
  }
}

function addTodo(todoText) {
  todos.push(todoText)
  showTodos()
}

function showTodos() {
  if (todos.length > 0) {
    todoContainer.innerHTML = ''
    todos.forEach(todoText => {
      let todo = document.createElement('div')
      todo.classList.add('todo')
      todo.innerHTML = ` <input value="${todoText}" class="todo-text" type="text" autocomplete="off" readonly>
  <button class="edit" type="button">Edit</button>
  <button class="delete" type="button">Delete</button>`
      todoContainer.appendChild(todo)
    })
  }
}

function deleteTodo(e) {
  console.log(e.target.classList)
}

function editTodo(params) {

}