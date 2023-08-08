import Cajero from '../models/Cajeros.js';
import { response } from 'express';

const postCajeros = async (req, res = response) => {
  try {
    const { numeroSerie, ubicacion, estado, efectivoDisponible, fechaInstalaccion } = req.body;
    const cajeroDB = await Cajero.findOne({ numeroSerie });

    if (cajeroDB) {
      return res.status(400).json({
        msg: `Este Cajero ${cajeroDB.numeroSerie}ya existe `,
      });
    }

    const cajero = new Cajero({ numeroSerie, ubicacion, estado, efectivoDisponible, fechaInstalaccion});
    await cajero.save();
    res.status(201).json(cajero);
  } catch (error) {
   console.log(error);
    res.status(500).json({ msg: 'Todos los datos son obligatorios' });
  }
};

export { postCajeros };
