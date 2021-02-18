
const { createTableMulti } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

require('colors');




console.clear();

// console.log(argv);


createTableMulti(argv.b, argv.l, argv.h)
  .then(nombreArchivo => console.log(nombreArchivo.america))
  .catch(err => console.log(colors.red(err)));