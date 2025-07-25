import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name: "Shaiel",
    edad: 19,
    calificacion: 4.4
},
{
    name: "Ivan",
    edad: 19,
    calificacion: 6
})

export const test = ()=>{
    console.log("Llamando al controlador desde app")
}//Poder llamar al controlador desde app