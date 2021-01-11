const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const yargs = require('yargs')
    .command('listar', 'Imprime por la consola la tabla de multiplicar', opts)
    .command('crear', 'Crea un archivo con la tabla de multiplicar', opts)
    .help()
    .argv;


module.exports = {
    yargs
}