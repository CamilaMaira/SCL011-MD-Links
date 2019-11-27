/*module.exports = () => {
};
*/

const fs = require ("fs");
const pathRoute = require ("path");
const marked = require ("marked")


//rescatar el link que se escribe en la terminal
let path = process.argv[2];
//se convierte a ruta absoluta (resolve)
path = pathRoute.resolve(path);
//si hay errores de escritura, los resuelve para leerlos bien con "normalize"
path = pathRoute.normalize(path);

/* funcion que lee archivo .md*/
function readMD (path) {
  const promise = new Promise ((resolve, reject) => {
    fs.readFile(path, "UTF-8", (error, data) => {
      if (error){
        reject(new Error ("Ups! No encontramos el archivo :("))
      }
      resolve(data);
      console.log(data);
    })
  })
  return promise
}
readMD(path)

