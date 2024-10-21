const express = require('express');  //Importar la libreria para crear un serviror web

// Instanciar nuestra aplicación web
const app = express()

// Configuramos nuestro servidor web
const port =3000;
app.listen(port, ()=>{
    console.log(`La aplicación ha iniciado en el puerto: ${port}` );
})

// Probamos las rutas para poder presentar mensajes al usuario a través del navegador
app.get("/", function(req, res){
    res.send("Hola Mundo desde Node, a través del Navegador");
})

app.get("/QuienSoy", function(req, res){
    res.json({"estudiante": "Su nombre completo aquí",
            "carrera": "TI DSM",
            "grado": "4°",
            "grupo": "B",
            "asignatura": "Aplicaciones Web Orientada a Servicios (AWOS)"
    });})

