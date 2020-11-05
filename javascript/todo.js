class Todo {
  constructor(todoText, completed = false) {
    this.todoText = todoText
    this.completed = completed
  }
  // Check all buttons on the todo and set the todos status within the array and page
  setTodoStatus(e, todosArray) {
    // Get the todos id
    const todoId = e.target.parentElement.id
    // Get access to the button
    const selectedButton = e.target.parentElement
    // Get access to the button class
    const selectedButtonClass = selectedButton.classList[0]
    // Get access to the todo
    const todo = selectedButton.parentElement

    switch (selectedButtonClass) {
      case 'complete':
        // When clicked toggle on and off the completed class
        todo.classList.toggle('completed')
        this.completed = !this.completed
        break;
      case 'edit':
        // We are now getting the parent of the button and looking for the first child (the todo text/input)
        let todoInput = selectedButton.parentElement.childNodes[1]
        // We are getting an updated version of the todo text based on what is typed into the input
        let updatedTodoText = todoInput.value
        // Removing the readOnly flag on the input
        todoInput.readOnly = !todoInput.readOnly
        // Update the selected todo based on its id
        todosArray[todoId] = updatedTodoText
        // Auto focus onto the todo when the edit button is selected
        todoInput.focus()
        break;
      case 'delete':
        // Remove the todo from the todos array based on its id
        todosArray.splice(todoId, 1)
        // Remove the todo from the page
        selectedButton.parentElement.remove()
        break;
      default:
        break;
    }
  }
}
export default Todo