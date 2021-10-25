
const { crearArchivo } = require("./helpers/multiplicar");
//const colors = require("colors"); 
const argv = require("./config/yargs");

require("colors");

//forma casera
//const [,,arg3 = "base=5"] = process.argv;
//const [,base = 5] = arg3.split("=");

console.clear();
console.log(process.argv)
console.log(argv);

console.log("base: yargs", argv.base);

crearArchivo(argv.b, argv.l)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, "creado"))
    .catch(err => console.log(err));