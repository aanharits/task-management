document.addEventListener('DOMContentLoaded', () => {

    // membuat instance dari objek task
    const myTask = new Task(); 

    //membuat variabel untuk mengambil seluruh tasks
    const existingTask = myTask.getTasks();

    const taskWrapper = document.getElementById('taskWrapper');
    const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');

    function displayAllTask() {
        if (existingTask.length === 0 ) {
            console.log('Empty Task')
        } else {
            console.log('Task Available')
        }
    }

    displayAllTask();
});