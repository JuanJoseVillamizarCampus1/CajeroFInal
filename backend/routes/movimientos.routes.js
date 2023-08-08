import { Router } from "express";
import { postMovimiento,getSaldo,getmovimientos } from "../controllers/movimientos.controllers.js";
import validateDocuments from '../middlewares/validate.documents.js'
import { check } from "express-validator";
import validateJWT from '../middlewares/validate.jwt.js'

const router= Router();
router.post('/op',[validateJWT,validateDocuments],postMovimiento)
router.get('/saldo/:id',getSaldo)
router.get ('/:id',getmovimientos)


export default router