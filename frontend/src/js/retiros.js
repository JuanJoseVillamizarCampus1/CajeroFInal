import {retiroEfectivo,consultaSaldo} from './api.js'
document.addEventListener('DOMContentLoaded', async() => {
    const user = JSON.parse(document.cookie.split('=')[1]);
    const saldo = await consultaSaldo(user);
    console.log(saldo.saldo);
    const displayElement = document.getElementById('display');
    let currentAmount = '';
    let amount = parseFloat(currentAmount);
    function appendToDisplay(value) {
      currentAmount += value;
      displayElement.textContent = currentAmount;
      amount = parseFloat(currentAmount);
    }
    
  
    function clearLastCharacter() {
      currentAmount = currentAmount.slice(0, -1);
      displayElement.textContent = currentAmount;
    }
  
    function clearDisplay() {
      currentAmount = '';
      displayElement.textContent = '';
    }
  
    function performDeposit() {
        
        if (isNaN(amount)||amount===0) {
          showMessage('Ingresa una cantidad válida');
          return;
        }else if(saldo.saldo<=amount){
            return alert('No tienes saldo suficiente para este retiro')
        }
        showMessage(`retiro de $${amount} realizado con éxito`);
        alert(`Retiro de ${amount} realizado con exito`)
        console.log(`${amount} tipode dato ${typeof(amount)}`);
        clearDisplay();
      }
      function showMessage(message) {
        document.getElementById('message').textContent = message;
      }

    document.getElementById('button-clear').addEventListener('click', clearLastCharacter);
    document.getElementById('button-cancel').addEventListener('click', clearDisplay);
    document.getElementById('button-deposit').addEventListener('click', performDeposit);
    const button0 = document.getElementById('button-0');
    button0.addEventListener('click', () => {
      appendToDisplay('0');
    });
    const button1 = document.getElementById('button-1');
    button1.addEventListener('click', () => {
      appendToDisplay('1');
    });
    const button2 = document.getElementById('button-2');
    button2.addEventListener('click', () => {
      appendToDisplay('2');
    });
    const button3 = document.getElementById('button-3');
    button3.addEventListener('click', () => {
      appendToDisplay('3');
    });
    const button4 = document.getElementById('button-4');
    button4.addEventListener('click', () => {
      appendToDisplay('4');
    });
    const button5 = document.getElementById('button-5');
    button5.addEventListener('click', () => {
      appendToDisplay('5');
    });
    const button6 = document.getElementById('button-6');
    button6.addEventListener('click', () => {
      appendToDisplay('6');
    });
    const button7 = document.getElementById('button-7');
    button7.addEventListener('click', () => {
      appendToDisplay('7');
    });
    const button8 = document.getElementById('button-8');
    button8.addEventListener('click', () => {
      appendToDisplay('8');
    });
    const button9 = document.getElementById('button-9');
    button9.addEventListener('click', () => {
      appendToDisplay('9');
    });

    const formularioRetiro = document.querySelector('#retiro')
    formularioRetiro.addEventListener('submit', async (e) => {
      e.preventDefault();
      retiroSaldo();
    });
    

  const token = user.token

const retiroSaldo=async(e)=>{
    console.log(token);
    const tipoTransaccion = 'retiro';
    const monto = amount;
    const numeroCuenta = user.usuario.numeroCuenta;
    const retiro = {
      tipoTransaccion,
      monto,
      numeroCuenta,
    };
    retiroEfectivo(retiro,token);
  }
  

})
  
