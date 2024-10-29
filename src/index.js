// const express = require('express');
import express from 'express';
import {dirname, join} from 'path'
import {fileURLToPath} from 'url'
import indexRouter from './router/index.js' //llamamos al router
import {Conectar} from './public/services/conexion.js' //conexion BD

//Creamos la instancia
const app = express();

//Configurar EJS como el controlador de vistas
app.set('view engine', 'ejs')

//Ruta para la pagina principal, ruteo carpeta 'views'
const __dirname = dirname(fileURLToPath(import.meta.url))
app.set('views', join(__dirname,'views'))

app.use(indexRouter) //le decimos a Express que utilice las rutas definidas en router

app.use(express.static(join(__dirname,'public'))) // llamando al archivo CSS
//llamar conexion BD
Conectar()
//Inicial el servidor
app.listen(3000)
console.log("El servidor está siendo escuchado en el puerto: ", 3000)