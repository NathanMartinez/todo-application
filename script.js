const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('add')
const filterButton = document.getElementById('filter')
const filterDropdown = document.getElementById('filter-menu')
const todoContainer = document.getElementById('todo-container')

const todos = []

window.addEventListener('keypress', e => getInputText(e))
addButton.addEventListener('click', e => getInputText(e))
filterButton.addEventListener('click', e => filterResults(e))

function getInputText(e) {
  const newTodoText = todoInput.value
  if (newTodoText !== '') {
    if (e.code === 'Enter' || e.target.id === 'add') {
      addTodo(newTodoText)
      todoInput.value = ''
    }
  }
}

function addTodo(todoText) {
  todos.push(todoText)
  showTodos()
}

function showTodos() {
  if (todos.length > 0) {
    todoContainer.innerHTML = ''
    todos.forEach((todoText, i) => {
      let todo = document.createElement('div')
      todo.id = i
      todo.classList.add('todo')
      todo.innerHTML = ` <input value="${todoText}" class="todo-text" type="text" autocomplete="off" readonly>
      <button class="complete" type="button"><i class="fas fa-check-circle"></i></button>
      <button class="edit" type="button"><i class="fas fa-pen-square"></i></button>
      <button class="delete" type="button"><i class="fas fa-minus-circle"></i></button>`
      todoContainer.appendChild(todo)
      todoContainer.scrollTop = todoContainer.scrollHeight;
      todo.addEventListener('click', e => setTodoStatus(e))
    })
  }
}

function setTodoStatus(e) {
  const todoId = e.target.parentElement.id
  const selectedButton = e.target.parentElement
  const selectedButtonClass = selectedButton.classList[0]
  const todo = selectedButton.parentElement

  switch (selectedButtonClass) {
    case 'complete':
      todo.classList.toggle('completed')
      break;
    case 'edit':
      let todoInput = selectedButton.parentElement.childNodes[1]
      let updatedTodoText = todoInput.value
      todoInput.readOnly = !todoInput.readOnly
      todos[todoId] = updatedTodoText
      todoInput.focus()
      break;
    case 'delete':
      todos.splice(todoId, 1)
      selectedButton.parentElement.remove()
      break;
    default:
      break;
  }
}

function filterResults() {
  addButton.classList.add('filtering')
  filterButton.classList.add('filtering')
  filterDropdown.classList.remove('filtering')
}