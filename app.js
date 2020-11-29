let listElement = document.querySelector("#app ul");
let inputElement = document.querySelector("#app input");
let buttonElement = document.querySelector("#app button");
buttonElement.onclick = addTodo;
let todos = [];

function render() {
  listElement.innerHTML = "";
  for (todo of todos) {
    let todoElement = document.createElement("li");
    let todotext = document.createTextNode(todo);
    let linkElement = document.createElement("a");
    let linkText = document.createTextNode("Excluir");

    let pos = todos.indexOf(todo);

    linkElement.setAttribute("href", "#");
    linkElement.setAttribute("onclick", "deleteTodo(" + pos + ")");

    linkElement.appendChild(linkText);

    todoElement.appendChild(todotext);
    todoElement.appendChild(linkElement);

    listElement.appendChild(todoElement);
  }
}

render();

function addTodo() {
  let inputValue = inputElement.value;
  todos.push(inputValue);
  render();
  inputElement.value = "";
}

function deleteTodo(pos) {
  todos.splice(pos, 1);
  render();
}
