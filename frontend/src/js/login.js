import { loginUsuario } from "./api.js";

document.addEventListener('DOMContentLoaded', () => {
    const formulario = document.querySelector('#login');
    formulario.addEventListener('submit', async (e) => {
        e.preventDefault();
        await logearUsuario();
    });

    const logearUsuario = async () => {
        const cedula = document.querySelector('#cedula').value;
        const pin = document.querySelector('#pin').value;

        if (!cedula || !pin) {
            mostrarMensaje("Por favor completa todos los campos");
            return;
        }

        const logear = {
            cedula,
            pin
        };

        try {
            const respuesta = await loginUsuario(logear);
            if (respuesta.usuario) {
                document.cookie = `user=${JSON.stringify(respuesta)}`;
                mostrarMensaje("Inicio de sesión exitoso");
                    window.location.href = "operaciones.html";
            } else {
                mostrarMensaje("Credenciales incorrectas o ha ocurrido un error en el servidor");
            }
        } catch (error) {
            console.error(error);
            mostrarMensaje("Hubo un error al intentar iniciar sesión");
        }
    };

    const mostrarMensaje = (mensaje) => {
        const mensajeDiv = document.querySelector('#mensaje');
        mensajeDiv.textContent = mensaje;
        mensajeDiv.style.display = "block";
    };
});
