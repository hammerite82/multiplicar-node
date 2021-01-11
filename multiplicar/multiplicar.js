const fs = require('fs');


let listarTabla = async(base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro base = ${base} no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El parametro limite = ${limite} no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base * i}\n`);
        }

        resolve(data);

    })

}


let crearArchivo = async(base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El parametro ${base} no es un numero.`);
            return;
        }

        if (!Number(limite)) {
            reject(`El parametro limite = ${limite} no es un numero.`);
            return;
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += (`${base} x ${i} = ${base * i}\n`);
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {

            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });

    });





}

module.exports = {
    crearArchivo,
    listarTabla
};