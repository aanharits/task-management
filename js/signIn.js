document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {

        e.preventDefault();

            usernameByInput: document.getElementById('username').value,

        const result = userManager.signInUserUser(usernameByInput);

        if (result.success) {
            return window.location.href = 'signin.html';
        } else {
            console.log('Proses simpan data gagal')
        }
    });
});