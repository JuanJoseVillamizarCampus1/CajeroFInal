import { Schema, model } from "mongoose";


const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'Nombre is required']
  },
  numeroCuenta: {
    type: String, 
    validate: {
      validator: function(v) {
        return /^\d{8}$/.test(v); 
      },
      message: props => `${props.value} no es un número de cuenta válido. Debe tener 8 dígitos numéricos.`
    }
  },
  pin: {
    type: String,
    required: [true, 'Pin is required']
  },
  cedula:{
    type: Number,
    required: [true, 'La cédula es requerida'],
    unique: true
  },
  saldo: {
    type: Number, 
    required: true
  },
  estado :{
    type:Boolean,
    default: true
},
  fechaCreacion: {
    type: Date,
    default: Date.now
  }, 
  rol :{
    type:String,
    required: true,
    default: 'USER',
  }
});

  
const Usuario = model('Usuario', usuarioSchema);
export { Usuario };
