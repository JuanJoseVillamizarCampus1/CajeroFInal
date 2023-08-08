import { consultaSaldo } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
  const user = JSON.parse(document.cookie.split('=')[1]);
  const nombreUsuario = document.getElementById('user-name');
  const saldoUsuario = document.getElementById('user-balance');
  const cuentaUsuario = document.getElementById('account-number');
  const fechaUsuario = document.getElementById('create-acount');
  const estadoUsuario = document.getElementById('state-acount');

  nombreUsuario.textContent = user.usuario.nombre;
  cuentaUsuario.textContent = user.usuario.numeroCuenta;
  fechaUsuario.textContent = user.usuario.fechaCreacion;
  const estado = user.usuario.estado;
  if (estado) {
    estadoUsuario.textContent = 'Activo';
  } else {
    estadoUsuario.textContent = 'Cuenta no activada';
  }

  try {
    const saldo = await consultaSaldo(user);
    if (saldo !== null) {
      saldoUsuario.textContent = saldo.saldo;
      console.log(saldo);
    }
  } catch (error) {
    console.error('Error:', error);
  }
});
