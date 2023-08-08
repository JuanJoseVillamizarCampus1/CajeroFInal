import {validationResult} from 'express-validator'
import { response } from "express";

const validateDocuments = (req , res=response, next)=>{
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json(errors)
        }
        next();
}
export default validateDocuments;