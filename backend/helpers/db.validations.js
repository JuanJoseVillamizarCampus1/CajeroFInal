import { Usuario } from "../models/Usuarios.js";

const existeUsuario= async(cedula)=>{
    try {
        const usuarioDB = await Usuario.findOne({ cedula });
    if ( usuarioDB ) {
        throw new Error(`La cedula ${ cedula } ya se encuentra registrada`);
    }
    } catch (error) {
        console.log(error);
    }
}
export{
    existeUsuario
}