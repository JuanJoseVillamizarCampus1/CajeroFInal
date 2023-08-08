import { Router } from "express";
import {check} from 'express-validator';
import {login,logout} from '../controllers/login.controlers.js'
import validateDocuments from '../middlewares/validate.documents.js'


const router = Router();

router.post('/',[
    check('cedula','La cedula es obligatoria').not().isEmpty(),
    check('pin','El pin es obligatorio').not().isEmpty(),
    validateDocuments],login)
router.post('/logout', logout);
export default router