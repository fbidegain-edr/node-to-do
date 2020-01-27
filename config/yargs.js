//#### Constantes de comandos para argv #########################

const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
};

const completado = {
    alias: 'c',
    desc: 'Marca como completada o pendiente la tarea',
    default: true
}

//################################################################



const argv = require('yargs')
    .command('crear', 'Crear un elemento', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de la tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Actualiza el estado de la tarea', {
        descripcion
    })
    .help()
    .argv;


module.exports = {
    argv
}