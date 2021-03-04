const todoInput = document.querySelector("#enter-todo");
const todoList = document.querySelector(".todo-list");

todoList.addEventListener("click", deleteCheck);

function addTodo(e) {
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-items");

  const newTodo = document.createElement("li");
  newTodo.classList.add("todo-item");
  newTodo.innerText = todoInput.value;
  todoDiv.appendChild(newTodo);

  const confirmButton = document.createElement("button");
  confirmButton.classList.add("confirm-button");
  confirmButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
  todoDiv.appendChild(confirmButton);

  const deleteButton = document.createElement("button");
  deleteButton.id = "delete-button";
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = '<i class="fa fa-trash" aria-hidden="true"></i>';
  todoDiv.appendChild(deleteButton);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(e) {
  const item = e.target;

  if (item.classList == "delete-button") {
    const todo = item.parentElement;
    todo.remove();
  }
  if (item.classList == "confirm-button") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
