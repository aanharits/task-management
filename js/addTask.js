document.addEventListener('DOMContentLoaded', () => {

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
            console.log('Berhasil Disimpan')
        } 
    });
});