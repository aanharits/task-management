class Task {
    constructor() {
        this.tasks = this.getTasks();
    }

    getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    updatelocalStorage() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    addTaskUser(taskData) {
        const newTaskData = {
            id: Date.now(),
            isCompleted: false,
            ...taskData,
        };

        this.tasks.push(newTaskData);
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        return { success: true };
    }

    completeTask(taskId) {
        console.log(taskId);

        const index = this.tasks.findIndex(task => task.id == taskId);

        if (index !== -1) {
            this.tasks[index].isCompleted = true;
            this.updatelocalStorage();
            return { success: true };
        }
    }

    deleteTask(taskId) {
        console.log(taskId);

        const index = this.tasks.findIndex(task => task.id == taskId);

        if (index !== -1) {
            this.tasks.splice(index, 1);
            this.updatelocalStorage();
            return { success: true };
        }
    }
}
