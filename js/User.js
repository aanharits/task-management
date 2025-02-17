class User {

    constructor() {
        this.users = this.getUsers() || [];
    }

    saveUser(userData) {
        const newUser = {
            id: Date.now(),
            ...userData,
        };  

        this.users.push(newUser); 
        localStorage.setItem('users', JSON.stringify(this.users));

        return {
            status: 'success',
        };
    }

    signInUser(username) {


        // proses pengembalian data ke signin.js controller
        return {
            status: 'success',
            username,
        };
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
        
    }
}