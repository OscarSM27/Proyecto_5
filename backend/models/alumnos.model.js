import { Schema, model } from "mongoose";

const EsquemaAlumnos = new Schema({
    name:String,
    edad:Number,
    calificacion:Number
})//Creando estructura de una tabla

export const TablaAlumnos = new model("Reprobados", EsquemaAlumnos)