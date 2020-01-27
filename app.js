const argv = require('./config/yargs').argv;
const toDo = require('./to-do/to-do');
const colors = require('colors');

// console.log(argv);

let comando = argv._[0];

switch (comando) {
    case 'crear':
        let tarea = toDo.crear(argv.descripcion);
        toDo.guardarDB();
        console.log(`=== Tarea creada ========================`.green);
        console.log(`Tarea: ${tarea.descripcion}`);
        console.log(`Estado: ${tarea.completado}`);
        console.log('========================================='.green);
        break;
    case 'listar':

        let listado = toDo.getListado();

        for (const element of listado) {
            //console.log(element);

            console.log(`========= Por hacer =====================`.green);
            console.log(element.descripcion);
            console.log(`Estado: ${element.completado}`);
            console.log('========================================='.green);
            console.log();
        }
        break;
    case 'actualizar':
        toDo.actualizar(argv.descripcion, argv.completado);
        break;

    case 'borrar':
        toDo.borrarTarea(argv.descripcion);
        break;
    default:
        console.log('No se reconoce el comando')
}