// Ejemplo de activación de HOT RELOAD
/*console.log("Hola desde NodeJS, esto esta en hot reload")*/

/*const express = require('express'); */
 //Importar la libreria para crear un serviror web - CommonJS / ECMA Script 6
// Instanciar nuestra aplicación web


import express from 'express';
const app = express()

// Configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}` );
})

// Routing - Enrutamiento para peticiones

app.get("/", function(req, res) {
    res.send("Hola desde la Web, en NodeJS")
})

app.get("/quienEres", function(req, res) {
    res.json(
        {
            "nombre": "Marco Antonio Ramírez Hernández",
            "carrera": "TI DSM",
            "grado": "4°",
            "grupo": "A"
        }
    )
})



//CMA Script 6
// CommonJS
/*
import generalRoutes from './routes/generalRoutes.js'
import userRoutes from './routes/userRoutes.js'

//Routing - Ennrutamiento.
app.use('/',generalRoutes);
app.use('/usuario/',userRoutes);


// Probamos las rutas para poder presentar mensajes al usuario a través del navegador
*/

