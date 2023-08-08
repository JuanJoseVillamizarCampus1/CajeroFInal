import { response } from 'express';
import { Usuario } from '../models/Usuarios.js';
import bcryptjs from 'bcryptjs';
import generateJWT from '../helpers/generate.JWT.js';

const handleError = (res, status, message) => {
    return res.status(status).json({ message });
};

const login = async (req, res = response) => {
    const { cedula, pin } = req.body;
    try {
        const usuario = await Usuario.findOne({ cedula });

        if (!usuario) {
            return handleError(res, 400, "Credenciales incorrectas");
        }

        if (!usuario.estado) {
            return handleError(res, 400, "Estado inactivo");
        }

        const validPin = bcryptjs.compareSync(pin, usuario.pin);
        if (!validPin) {
            return handleError(res, 400, "Credenciales incorrectas");
        }

        const token = await generateJWT(usuario.id);
        return res.json({ usuario, token });
    } catch (error) {
        console.error(error);
        return handleError(res, 500, "Ha ocurrido un error en el servidor");
    }
};
//Intentando borrar cache
const logout = async (req, res = response) => {
   
    try {
        
        res.header('Cache-Control', 'no-cache, no-store, must-revalidate');
        res.header('Pragma', 'no-cache');
        res.header('Expires', '0');

        return res.json({ message: 'Sesión cerrada exitosamente' });
    } catch (error) {
        console.error(error);
        return handleError(res, 500, 'Ha ocurrido un error en el servidor');
    }
};


export {
    login,
    logout
};
