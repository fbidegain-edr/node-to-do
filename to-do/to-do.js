//### Requires #######################################
const fs = require('fs');
//####################################################


const guardarDB = () => {

    // JSON.stringify() convierte un objeto a formato json
    let data = JSON.stringify(listadoPorHacer);
    let json = './db/data.json';

    fs.writeFile(json, data, (err) => {
        if (err) throw err;
        // console.log('Tarea agregada');
    });

}

const cargarDB = () => {
    //trae la información dentro del archivos data.json

    try {
        listadoPorHacer = require('../db/data.json');
    } catch (err) {
        listadoPorHacer = [];
    }
    /* ------------------------------------------------------------------------
    si todo funciona bien devuelve "listadoPorHacer",
    de lo contrario devuelve un arreglo vacío [], ya que si el archivo está
    completamente vacío causa un error por no ser un formato válido para .json 
    --------------------------------------------------------------------------*/
}



const getListado = () => {

    let listado = require('../db/data.json');
    return listado;


    /* ------------------------------------------------------------------------
    Guarda el json con el listado de las tareas por hacer en la variable
    listado para luego retornarla. Y así poder llamarla desde app.js 
    --------------------------------------------------------------------------*/
}


const actualizar = (descripcion, estado = true) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer[index].completado = estado;
        //guardarDB();
        console.log(`El estado de la tarea cambió a ${estado}`);
    } else {
        console.log(`La tarea no existe`)
    }

    guardarDB();

}


const borrarTarea = (descripcion) => {

    cargarDB();

    let index = listadoPorHacer.findIndex(tarea => {
        return tarea.descripcion === descripcion;
    })

    if (index >= 0) {
        listadoPorHacer.splice([index], [index]);
        //slice elimina los elementos desde el primer parametro hasta el segundo por eso se pasa 2 veces el mismo
        console.log(`Tarea eliminada`);
        guardarDB();
    } else {
        console.log(`La tarea no existe`)
    }

}


let listadoPorHacer = [];

/* --------------------------------------------------------------
primero cargamos la información vieja en "listadoPorHacer",
de lo contrario crear(); siempre hará push sobre un arreglo vacío
-----------------------------------------------------------------*/

cargarDB();


const crear = (descripcion) => {
    let toDo = {
        descripcion,
        completado: false
    };

    listadoPorHacer.push(toDo);

    return toDo;
}



module.exports = {
    crear,
    guardarDB,
    getListado,
    actualizar,
    borrarTarea
}