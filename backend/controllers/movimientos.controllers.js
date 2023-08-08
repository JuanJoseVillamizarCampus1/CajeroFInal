import { response } from "express";
import  Movimiento from "../models/Movimientos.js";
import { Usuario } from "../models/Usuarios.js";

const postMovimiento = async (req, res) => {
  const { tipoTransaccion, monto, numeroCuenta } = req.body;

  try {
    const usuario = await Usuario.findOne({ numeroCuenta: numeroCuenta });

    if (!usuario) {
      return res.status(404).json({ message: 'Usuario no encontrado' });
    }

    const movimiento = new Movimiento({
      tipoTransaccion,
      monto,
      numeroCuenta,
      usuario: req.usuario._id
    });

    if (tipoTransaccion === 'depósito') {
        usuario.saldo += monto;
        await movimiento.save();
      }
       else if (tipoTransaccion === 'retiro') {
        if (usuario.saldo>monto) {
          usuario.saldo -= monto;
          await movimiento.save();
        }
        
        else{
        return  res.status(500).json({ message: 'No tienes el monto suficiente para realizar esta transferencia' });
        }
        
      }
      await usuario.save();
  
      res.status(200).json({ message: `${tipoTransaccion.charAt(0).toUpperCase() + tipoTransaccion.slice(1)} realizado con éxito` });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };

  const getSaldo = async (req, res) => {
    const { id } = req.params; 
    try {
      
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      
      res.status(200).json({ saldo: usuario.saldo, usuario: usuario});
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error en el servidor' });
    }
  };
  
  const getmovimientos = async(req,res)=>{
    const {id}= req.params;
    try {
      const usuario = await Usuario.findById(id);
      if (!usuario) {
        return res.status(404).json({ message: 'Usuario no encontrado' });
      }
      const movimientos = await Movimiento.find({ usuario: id });

      res.status(200).json(movimientos);
    } catch (error) {
      console.error('Error al obtener los movimientos:', error);
    res.status(500).json({ message: 'Error en el servidor' });
    }
  }
  export { postMovimiento,getSaldo,getmovimientos }