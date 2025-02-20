class Task {

    constructor() {
        this.tasks = this.getUsers() || []
    }

    addTaskUser(taskData) {
        const newTask = {
            ...taskData,
        }

        this.tasks.push(newTask); 
        localStorage.setItem('tasks', JSON.stringify(this.tasks));

        return {
            success: true,
        };
    }

    
    getUsers() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
        
    }
}

