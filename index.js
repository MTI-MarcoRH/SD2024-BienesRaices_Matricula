// ECMA Script 6
// CommonJS
import express from 'express';
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'


//const express = require('express');  //Importar la libreria para crear un serviror web - CommonJS
// Instanciar nuestra aplicación web
const app = express()

// Configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}` );
})

//Routing - Ennrutamiento.
app.use('/',generalRoutes);
app.use('/usuario/',userRoutes);


// Probamos las rutas para poder presentar mensajes al usuario a través del navegador


