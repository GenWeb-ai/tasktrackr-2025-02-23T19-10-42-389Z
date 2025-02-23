document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Todo App</h1>
        <input type="text" id="new-todo" placeholder="Add a new todo">
        <button id="add-todo">Add</button>
        <ul class="todo-list" id="todo-list"></ul>
    `;

    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            newTodoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${text}</span>
            <button onclick="removeTodoItem(this)">Remove</button>
        `;
        todoList.appendChild(li);
    }

    window.removeTodoItem = function(button) {
        const li = button.parentElement;
        todoList.removeChild(li);
    };
});