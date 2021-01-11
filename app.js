const yargs = require('./config/yargs').yargs;
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = yargs._[0];

switch (comando) {
    case 'listar':
        listarTabla(yargs.base, yargs.limite)
            .then(tabla => {
                console.log('===================================='.green);
                console.log(`La tabla de multiplicar del ${yargs.base}`.green);
                console.log('===================================='.green);
                console.log(`${tabla}`.blue);
            })
            .catch(err => console.log(err));
        break;
    case 'crear':
        crearArchivo(yargs.base, yargs.limite)
            .then(mensaje => console.log(`El archivo ${mensaje} se ha creado.`.green))
            .catch(err => console.log(err));
        break;
    default:
        console.log('Comando no reconocido');

}