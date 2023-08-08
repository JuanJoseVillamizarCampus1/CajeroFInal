import { Schema,model } from "mongoose";
const operacionesShema = Schema({
tipoOperacion:{
    type:String,
    required:true
},
FechaHora:{
    type:Date
},
numeroCuenta:{
    type:String,
    required:true
},
detalleOperacion:{
    type:String,
    required:true
},
resultadoOperacion:{
    type:String,
    required:true
},
usuario: {
    type: Schema.Types.ObjectId,
    ref: 'Usuario',
    required: true
}
});
const Operacion = model('Operaciones',operacionesShema);
export default Operacion;