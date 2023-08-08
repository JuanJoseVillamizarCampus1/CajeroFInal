import { Schema, model } from 'mongoose';

const cajerosSchema = Schema({
    numeroSerie: {
        type: String,
        required: [true, 'Es requerido el numero de Serie'],
        unique: true
    },
    ubicacion: {
        type: String,
        required: true
    },
    estado: {
        type: Boolean,
        default: true,
        required: true
    },
    efectivoDisponible: {
        type: Number,
        required: true
    },
    fechaInstalacion: {
        type: Date,
        default: Date.now,
        required: true
    },
    ultimaFechaMantenimiento: {
        type: Date
    }
});

const Cajero = model('Cajero', cajerosSchema);

export default Cajero;
