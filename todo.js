document.getElementById('add-btn').addEventListener('click', addTask);

function addTask() {
    const input = document.getElementById('todo-input');
    const taskText = input.value.trim();

    if (taskText !== '') {
        const todoList = document.getElementById('todo-list');
        const li = document.createElement('li');
        li.className = 'todo-item';
        li.innerHTML = `
            <span>${taskText}</span>
            <button onclick="removeTask(this)">Delete</button>
        `;

        li.addEventListener('click', function () {
            this.classList.toggle('completed');
        });

        todoList.appendChild(li);
        input.value = '';
    }
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}