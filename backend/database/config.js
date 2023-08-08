import mongoose from 'mongoose';

const dBconnection = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            useUnifiedTopology:true
        });
        console.log('DB CONTECTADA');
    } catch (error) {
        console.log(error);
        throw new  Error('Error al conectar la databae')
    }
   
}
export {dBconnection};