document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    // membuat format tanggal
    const date = new Date();

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
            createdAt: date.toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })
        };

        const result = taskManager.addTaskUser(taskData);
        
        if (result) {
            return window.location.href = 'tasks.html'
        } 
    });
});