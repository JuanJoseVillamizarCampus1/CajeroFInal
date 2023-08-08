import { Schema, model } from "mongoose";
const contadorSchema = Schema({
    cuenta: {
      type: Number,
      default: 10000000 
    }
  });
  
  const Contador = model('Contador', contadorSchema);

  export{
    Contador
  }