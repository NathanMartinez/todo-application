const todoInput = document.getElementById('todoInput')
const addButton = document.getElementById('add')
const todoContainer = document.getElementById('todo-container')

const todos = []

window.addEventListener('keypress', e => getInputText(e))
addButton.addEventListener('click', e => getInputText(e))

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
      <button class="complete" type="button">Complete</button>
      <button class="edit" type="button">Edit</button>
      <button class="delete" type="button">Delete</button>`
      todoContainer.appendChild(todo)
      todo.addEventListener('click', e => setTodoStatus(e))
    })
  }
}

function setTodoStatus(e) {
  const todoId = e.target.parentElement.id
  const selectedButton = e.target.classList[0]

  switch (selectedButton) {
    case 'complete':
      e.target.parentElement.classList.toggle('completed')
      break;
    case 'edit':
      let todoInput = e.target.parentElement.childNodes[1]
      let updatedTodoText = todoInput.value
      todoInput.readOnly = !todoInput.readOnly
      todos[todoId] = updatedTodoText
      todoInput.focus()
      break;
    case 'delete':
      todos.splice(todoId, 1)
      e.target.parentElement.remove()
      break;
    default:
      break;
  }
}