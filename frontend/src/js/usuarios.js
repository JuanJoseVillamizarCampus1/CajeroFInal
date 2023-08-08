import { insertarUsuario,verificarExisteUsuario } from "./api.js";

const formulario = document.querySelector('#usuarioForm')
formulario.addEventListener('submit', async (e) => {
  e.preventDefault();
  agregarUsuario();
});
    const agregarUsuario=async(e)=>{
    const nombre = document.querySelector('#nombre').value;
    const pin = document.querySelector('#pin').value;
    const saldo = parseFloat(document.querySelector('#saldo').value);
    const cedula = document.querySelector('#cedula').value;
  
    const cedulaExiste = await verificarExisteUsuario(cedula);
  
    if (cedulaExiste) {
      alert(`La cedula ${cedula} ya está registrada xd.`);
      return;
    }

    const usuario = {
      nombre,
      pin,
      saldo,
      cedula
    };
    insertarUsuario(usuario);

};
window.addEventListener('unload', () => {
  document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
});
