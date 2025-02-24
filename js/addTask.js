document.addEventListener('DOMContentLoaded', () => {

    // membuat properti tanggal yang diharapkan berformat 'yyyy-mm-dd;
    const now = new Date();
    const
    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
        };

        const result = taskManager.addTaskUser(taskData);

        if (result) {
            return window.location.href = 'tasks.html'
        } 
    });
});