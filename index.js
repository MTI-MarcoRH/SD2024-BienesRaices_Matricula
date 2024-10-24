// Ejemplo de activación de HOT RELOAD
/*console.log("Hola desde NodeJS, esto esta en hot reload")*/

/*const express = require('express'); */


import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'

const app = express()

// Configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}` );
})

// Routing - Enrutamiento para peticiones
app.use('/',generalRoutes);
app.use('/usuario',userRoutes);

