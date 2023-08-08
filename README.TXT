DATABASE:
Cajeros
{
  "_id": ObjectId("..."),         // El ID único generado por MongoDB
  "numeroSerie": "CAJ123456",     // Número de serie del cajero
  "ubicacion": "Dirección XYZ",   // Ubicación del cajero automático
  "estado": "activo",             // Estado del cajero (activo o inactivo)
  "efectivoDisponible": 5000,     // Cantidad de efectivo disponible en el cajero
  "fechaInstalacion": ISODate("2023-08-01T00:00:00Z"), // Fecha de instalación del cajero
  "ultimaFechaMantenimiento": ISODate("2023-07-25T00:00:00Z") // Última fecha de mantenimiento
}

movimientos
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "tipoTransaccion": "depósito",      // Tipo de transacción (depósito, retiro, etc.)
  "monto": 1000,                      // Monto involucrado en la transacción
  "fechaHora": ISODate("2023-08-01T12:34:56Z"), // Fecha y hora de la transacción
  "numeroCuenta": "123456789",        // Número de cuenta asociado con el movimiento
  "descripcion": "Depósito en efectivo" // Descripción opcional
}

operaciones 
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "tipoOperacion": "transacción financiera", // Tipo de operación (transacción financiera, inicio de sesión, etc.)
  "fechaHora": ISODate("2023-08-01T12:34:56Z"), // Fecha y hora de la operación
  "numeroCuenta": "123456789",        // Número de cuenta asociado con la operación
  "detalleOperacion": "Depósito en efectivo de $1000", // Detalles adicionales sobre la operación
  "resultadoOperacion": "éxito"      // Resultado de la operación (éxito, error, denegado, etc.)
}
usuario
{
  "_id": ObjectId("..."),             // El ID único generado por MongoDB
  "nombreCompleto": "Juan Pérez",     // Nombre completo del usuario
  "numeroCuenta": "123456789",        // Número de cuenta único del usuario
  "pin": "1234",                     // PIN numérico del usuario
  "saldo": 1500.00,                  // Saldo actual de la cuenta bancaria del usuario
  "fechaCreacion": ISODate("2023-08-01T10:00:00Z") // Fecha de creación de la cuenta
}
Instrucciones:
1. Con el comando "npm init -y" inicializamos un nuevo proyecto en node.js creará un archivo "package.json" con valores predeterminados para el nombre del proyecto, la versión, la descripción, el punto de entrada del programa, las dependencias y otros detalles del proyecto. Esto permite comenzar rápidamente un nuevo proyecto sin tener que responder manualmente a todas las preguntas de configuración.

2.Con el comando "npm i express" instalamos el paquete de express en un proyecto node.js

3.En nuestro package.json debemos indicar que es de "type": "module" debajo de description arriba del main.

4.En scripts creamos a dev que contiene nuestro app.js que ejecuta toda la app
 "scripts": {
    "dev": "nodemon app.js"
  }

5. Con el comando "npm i -D nodemon" instalamos el paquete de nodemon como una dependecia de desarrollo Al ejecutar "npm i -D nodemon", NPM buscará el paquete de nodemon en el registro público de paquetes de NPM y lo descargará e instalará en el proyecto. La opción "-D" (abreviatura de "--save-dev") indica que nodemon se instalará como una dependencia de desarrollo, lo que significa que se utilizará durante el desarrollo del proyecto, pero no será necesario en el entorno de producción.

6. EN nuestro package json cambiamos "scripts": {
    "dev": "nodemon src/index.js"
  }.

7.Con el comando "npm i moongse" instalamos mongoose en nuestro proyecto  Mongoose es una biblioteca de JavaScript que proporciona una capa de abstracción para interactuar con bases de datos MongoDB desde Node.js.
-CREAMOS UN ARCHIVO LLAMADO .ENV EL CUAL ALMCENARA LAS VARIABLES DE ENTORNO
8.Creamos una carpeta llamada database donde creamos un archivo llamado config.js el cual usaremos para conectarnos a la base de datos
8.1 primero importamos mongoose "import mongoose from 'mongoose';
8.2 Creamos una funcion asincrona 'DBconnection' que va a crear la conexion con la base de datos
8.3 envolvemos todo en un trycath para atrapar errores Usamos el metodo de mongoose 'mongoose.conenect()'al cual le pasamos la URI de nuestra database por medio de las variables de entorno process.env.URI, ademas agregamos  Las opciones { useNewUrlParser: true, useUnifiedTopology: true } son configuraciones que se le pasan a mongoose.connect() para evitar advertencias y utilizar la última versión del motor de análisis y el descubrimiento de servidores.
8.3 exportamos nuestra funcion 'DBconnection' para ser usada en el resto del proyecto.
9.Creamos una carpeta llamada MODELS dentro de la cual creamos un archivo llamado 'server.js'que sera la base para crear y configurar un servidor Express en nuestra aplicacion NODEJS.
-Con el comando npm i cors instalamos los CORS=El paquete cors es una biblioteca de JavaScript que proporciona middleware para habilitar el intercambio de recursos de origen cruzado (CORS) en una aplicación Node.js. CORS es una política de seguridad implementada en los navegadores que restringe las solicitudes de recursos entre diferentes dominios. Permite que un servidor controle qué dominios pueden acceder a sus recursos y qué tipos de solicitudes son permitidas.
9.1 dentro de server importamos a express los cors y nuestra funcion 'DBconnection' para conectarse a la base de datos.
9.2 Constructor: El constructor de la clase Server inicializa el servidor Express. Configura la aplicación (this.app), define el puerto (this.port), y establece diferentes rutas (this.paths) para diferentes recursos de la API. También llama a this.connectDB() para conectar con la base de datos MongoDB.

9.3connectDB(): Esta función asincrónica connectDB() simplemente llama a la función dbConnection() (que asumimos que establece la conexión con la base de datos) y espera a que la conexión se complete antes de continuar.

9.4middlewares(): Esta función configura los middlewares utilizados en la aplicación Express. Agrega el middleware cors para permitir solicitudes desde diferentes dominios, configura Express para leer y analizar datos JSON en el cuerpo de la solicitud y define la carpeta pública para servir contenido estático.

9.5routes(): Esta función configura las rutas para diferentes recursos de la API. Utiliza las rutas definidas en this.paths para especificar las rutas base para cada recurso, y luego asocia esas rutas con los archivos de rutas correspondientes. Cada recurso tiene su propio archivo de rutas, como auth.routes.js, usuario.routes.js, etc.

9.7listen(): Esta función inicia el servidor Express escuchando en el puerto definido en this.port. Cuando el servidor está listo para recibir solicitudes, imprime un mensaje en la consola indicando el puerto en el que está escuchando.

9.8 Finalmente, se exporta la clase Server, lo que permite que se utilice en otros archivos para crear instancias de un servidor Express y ejecutarlo.
-Con el comando npm i dotenv instalamos dotenv El paquete dotenv es una biblioteca de JavaScript que se utiliza para cargar variables de entorno desde un archivo llamado .env .Las variables de entorno son variables que contienen información de configuración, como claves de API, contraseñas, tokens, y otros datos sensibles
10.creamos un archivo llamado app.js  el cual ejecutara nuestra aplicacion, dentro de este importamos a dotenv y a nuestra clase Server 
10.1 dotenv.config() es la función que carga las variables de entorno desde el archivo .env y las establece como variables de entorno permitiéndo acceder a ellas a través de process.env.
10.2 instaciamos nuestra clase server y llamamos al metodo listen de Server 
