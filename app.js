import mongoose from "mongoose";//Conectar una base de datos
import cors from "cors";//Dar seguridad a un server
import dotenv from "dotenv";//Poder llamar lo que hay en .env
import express from "express";//Crear un servidor local
//Importaciones de librerias
dotenv.config();
mongoose.connect(process.env.urlBD)//conectar con mongodb compass
.then(()=>{
    console.log("Si jala esta madre")
})
.catch((error)=>{
    console.log("No jala esta mierda", error)
})//Promesa de verificacion de funcionamiento

const app = express();//servidor realizado
app.use(cors());
app.listen(4000, ()=>{
    console.log("Si se oye")
})//Verificar si funciona al servidor