import {logout} from '../js/api.js'

const user = JSON.parse(document.cookie.split('=')[1]);
console.log(user);
const nombreUsuario = document.getElementById('user-name');
nombreUsuario.textContent = user.usuario.nombre

const logoutButton = document.getElementById('logout-button');

logoutButton.addEventListener('click', async () => {
    await logout();
    document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    window.location.href = 'index.html';
});
