import {check, validationResult} from 'express-validator'
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
        //Validación de los campos que se reciben del formulario
        await check('nombre_usuario').notEmpty().withMessage("El nombre del usuario es un campo obligatorio.").run(request)
        await check('correo_usuario').notEmpty().withMessage("El correo electrónico es un campo obligatorio.").isEmail().withMessage("El correo electrónico no tiene el formato de: usuario@dominio.extesion").run(request)
        await check('pass_usuario').notEmpty().withMessage("La contraseña es un campo obligatorio.").isLength({min:8}).withMessage("La constraseña debe ser de almenos 8 carácteres.").run(request)
        await check("pass2_usuario").equals(request.body.pass_usuario).withMessage("La contraseña y su confirmación deben coincidir").run(request)

        let result = validationResult(request)
        
        //Verificamos si hay errores de validacion
        if(!result.isEmpty())
        {
            return response.render("auth/register", {
                page: 'Error al intentar crear la Cuenta de Usuario',
                errors: result.array(),
                user: {
                    name: request.body.nombre_usuario,
                    email: request.body.email
                }
            })
        }
        
        //Verificar que el usuario no existe previamente en la bd
        const existingUser = await User.findOne({ where: { email: request.body.correo_usuario }})

        console.log(existingUser);

        if(existingUser)
        { 
            return response.render("auth/register", {
            page: 'Error al intentar crear la Cuenta de Usuario',
            errors: [{msg: `El usuario ${request.body.correo_usuario} ya se encuentra registrado.` }],
            user: {
                name: request.body.nombre_usuario
            }
        })

        }
        return;

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