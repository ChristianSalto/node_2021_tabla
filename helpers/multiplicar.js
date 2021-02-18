const fs = require('fs');
const colors = require('colors');



const createTableMulti = async (base = 1, listar = false, limite = 10) => {

  try {


    let salida = '';
    let consola = '';


    for (let i = 0; i <= limite; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
      consola += `${base} ${'x'.cyan} ${i} ${'='.cyan} ${base * i}\n`;
    };

    if (listar) {
      console.log("======================".green);
      console.log(colors.magenta('Tabla del : '), colors.blue(base));
      console.log("======================".green);

      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt -> ha sido creada....`;

  } catch (err) {
    throw err;
  }

}

module.exports = {
  createTableMulti,
}