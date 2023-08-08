import { getMovimientos } from './api.js';


  const mostrarMovimientos = async()=> {
    const user = JSON.parse(document.cookie.split('=')[1]);
const movimientos =  await getMovimientos(user)
    const movimientosTable = document.getElementById('movimientos-table');
    console.log(movimientos);
    movimientos.forEach(movimiento => {
      const fila = document.createElement('tr');
      fila.innerHTML += `
        <td>${new Date(movimiento.fechaHora).toLocaleString()}</td>
        <td>${movimiento.tipoTransaccion}</td>
        <td>${movimiento.monto}</td>
      `;
  
      movimientosTable.appendChild(fila);
    });
  }
  
  mostrarMovimientos();