import { Router } from "express";
import { postUsuario,getUsuarios } from "../controllers/usuarios.controllers.js";
import validateDocuments from '../middlewares/validate.documents.js'
import incrementarContador from "../helpers/validation.cuenta.js"
import { check } from "express-validator";
const router = Router();

router.post('/',[
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('pin', 'El pin es requerido').not().isEmpty(),
    incrementarContador,
validateDocuments],
postUsuario)
router.get('/',getUsuarios)

export default router