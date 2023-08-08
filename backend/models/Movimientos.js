import { Schema, model } from "mongoose";

const MovimientosSchema = Schema({
    tipoTransaccion: {
        type: String,
        required: true
    },
    monto: {
        type: Number, 
        required: true
    },
    fechaHora: {
        type: Date,
        required: true,
        default: Date.now
    },
    numeroCuenta: {
        type: String,
        required: true
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        required: true
    }
});

const Movimiento = model('Movimientos', MovimientosSchema);

export default Movimiento;
