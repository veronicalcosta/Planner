document.getElementById('addTaskButton').addEventListener('click', addTask);

function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskValue = taskInput.value;
    
    if (taskValue === '') return;

    const taskList = document.getElementById('taskList');
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        ${taskValue}
        <button class="complete-btn">✔</button>
        <button class="delete-btn">✖</button>
    `;

    taskList.appendChild(taskItem);
    taskInput.value = '';

    const completeButton = taskItem.querySelector('.complete-btn');
    const deleteButton = taskItem.querySelector('.delete-btn');

    completeButton.addEventListener('click', () => {
        taskItem.classList.toggle('completed');
    });

    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });
}
