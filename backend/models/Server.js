import express from 'express';
import cors from 'cors';
import {dBconnection} from '../database/config.js';
import routerCajero from '../routes/cajeros.routes.js'
import routerUsuario from '../routes/usuarios.routes.js'
import routerLogin from '../routes/login.routes.js'
import routerMovimientos from '../routes/movimientos.routes.js'

class Server{
    constructor(){
        this.app= express();
        this.port=process.env.PORT;
        this.middlewares();
        this.connetionDb();
        this.paths={
            login:'/api/login',
            cajeros: '/api/cajeros',
            movimientos: '/api/movimientos',
            usuarios: '/api/usuarios',
            operaciones: '/api/operaciones',
        }
        this.routes()
    }
    async connetionDb (){
        await dBconnection()
    }
    middlewares(){
        this.app.use(cors())
        this.app.use(express.json());
        this.app.use(express.static('public'));
    }
    routes(){
        this.app.use(this.paths.login,routerLogin)
        this.app.use(this.paths.cajeros,routerCajero);
        this.app.use(this.paths.usuarios,routerUsuario);
        this.app.use(this.paths.movimientos,routerMovimientos);
    }
    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server is runnig on port ${this.port}`);
        })
    }
}
export default Server;