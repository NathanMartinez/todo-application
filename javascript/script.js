import {
  todoInput,
  addButton,
  filterButton,
  filterDropdown,
  todoContainer
} from './elements.js'
import TodoInputs from './todoInputs.js'
import Todo from './todo.js'

// Instantiating TodoInputs
let todoinputs = new TodoInputs(todoInput, addButton, filterButton, filterDropdown)

// Create an array to house the todo data
const todos = []

// Add event listenters to check for button presses
window.addEventListener('keypress', e => todoinputs.addTodo(Todo, e, todos, todoContainer))
addButton.addEventListener('click', e => todoinputs.addTodo(Todo, e, todos, todoContainer))
// filterButton.addEventListener('click', e => filterSelected(e))