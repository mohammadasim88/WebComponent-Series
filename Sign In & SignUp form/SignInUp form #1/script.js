// let container = document.getElementById('container');
// let registerBtn = document.getElementById('register');
// let loginBtn = document.getElementById('login');

// const buttons = [registerBtn, loginBtn];

// buttons.forEach(button => {
//     button.onclick = function() {
//         const action = this.id === 'register' ? 'add' : 'remove';
//         container.classList[action]('active');
//     };
// });

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});