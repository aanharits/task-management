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
            success: true,
        };
    }

    signInUser(usernameByInput) {
        // proses pemeriksaan data username pada localstorage 
        const userExist = this.users.some(user => user.username.toLowerCase() === usernameByInput);
        
        if (userExist) {
            return {
                success: true,
                username,
            }
        } else {
            return {
                success: false,
            };
        }
    }

    getUsers() {
        return JSON.parse(localStorage.getItem('users')) || [];
        
    }
}