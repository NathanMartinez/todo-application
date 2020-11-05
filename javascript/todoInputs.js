class TodoInputs {
  constructor(textInput, addButton, filterButton, filterDropDown, filtering = false) {
    this.textInput = textInput
    this.addButton = addButton
    this.filterButton = filterButton
    this.filterDropDown = filterDropDown
    this.filtering = filtering
  }
  // Get the text within the todo input
  getInputText(e) {
    const newTodoText = this.textInput.value
    if (newTodoText !== '') {
      if (e.code === 'Enter' || e.target.id === 'add') {
        this.textInput.value = ''
        return newTodoText
      }
    }
  }
  // Add a todo to the todos array then show all todos within the todo array
  addTodo(Todo, e, todosArray, todoContainer) {
    let todoText = this.getInputText(e)
    if (todoText) {
      todosArray.push(new Todo(todoText, false))
      this.showTodos(todosArray, todoContainer)
      console.log(todosArray)
    }
  }
  // Iterate through the array and display the data as todos
  showTodos(todosArray, todoContainer) {
    if (todosArray.length > 0) {
      // Clear the page before re-displaying the data
      todoContainer.innerHTML = ''
      todosArray.forEach((todoObj, i) => {
        let todo = document.createElement('div')
        // Add an id to the todo for deletion and editing
        todo.id = i
        // Add the todo class
        todo.classList.add('todo')
        if (todoObj.completed) {
          todo.classList.add('completed')
        }
        // Set the div's innerHTML to the following html
        todo.innerHTML = ` <input value="${todoObj.todoText}" class="todo-text" type="text" autocomplete="off" readonly>
      <button class="complete" type="button"><i class="fas fa-check-circle"></i></button>
      <button class="edit" type="button"><i class="fas fa-pen-square"></i></button>
      <button class="delete" type="button"><i class="fas fa-minus-circle"></i></button>`
        // Add an event listener to the each todo
        todo.addEventListener('click', e => todoObj.setTodoStatus(e, todosArray))
        // Append the todo to the todo container
        todoContainer.appendChild(todo)
        // Auto scroll to the bottom of the list when a todo is added
        todoContainer.scrollTop = todoContainer.scrollHeight;
      })
    }
  }
}
export default TodoInputs