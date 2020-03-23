var buttonAddTodo = document.querySelector("#addtodo");
var todos =  JSON.parse(localStorage.getItem("todos")) || [];
var listTodo = document.querySelector('#todo');

function CreateTodo(){
    listTodo.innerHTML = '';

    for(todo of todos){
        var element = document.createElement("li");
        element.classList.add('list-group-item');

        var remove = document.createElement('a');
        var pos = todos.indexOf(todo);
        remove.setAttribute('onclick', 'RemoveToDo('+pos+')');
        remove.setAttribute('href', '#');
        remove.appendChild(document.createTextNode('   excluir'));

        var textTodo = document.createTextNode(todo);
        element.appendChild(textTodo);
        element.appendChild(remove);

        listTodo.appendChild(element);
    }
}

function AddToDo(){
    var textTodo = document.querySelector("#texttodo").value;
    if(textTodo === "" || textTodo == undefined){ alert("You forgot the item!"); return;}
    todos.push(textTodo);
    document.querySelector("#texttodo").value = '';
    localStorage.setItem('todos', JSON.stringify(todos));
    CreateTodo();
}

function RemoveToDo(pos){
    todos.splice(pos, 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    CreateTodo();
}

CreateTodo();