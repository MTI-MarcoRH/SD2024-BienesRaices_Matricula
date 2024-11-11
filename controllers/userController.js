import User from '../models/User.js'


const formularioLogin = (request, response) =>   {
        response.render("auth/login", {
            page : "Ingresa a la plataforma"
        })
    }

const formularioRegister = (request, response) =>  {
        response.render('auth/register', {
            page : "Crea una nueva cuenta..."
        })};

const formularioPasswordRecovery = (request, response) =>  {
    response.render('auth/passwordRecovery', {
            page : "Recuperación de Contraseña"
     })};

const  createNewUser= async(request, response) =>
    {
        console.log("Registrando a un nuevo usuario.");
        console.log(request.body);

        //Registramos los datos en la base de datos.
        const newUser = await User.create({
            name: request.body.nombre_usuario, 
            email: request.body.correo_usuario,
            password: request.body.pass_usuario,
        }); 
        response.json(newUser); 
    }


export {formularioLogin, formularioRegister, formularioPasswordRecovery, createNewUser}