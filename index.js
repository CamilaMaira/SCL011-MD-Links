/*module.exports = () => {
};
*/

const fs = require ("fs");
const pathRoute = require ("path");
const Marked = require ("Marked")


/*rescatar el link que se escribe en la terminal*/
let path = process.argv[2];
path = pathRoute.resolve(path);
path = pathRoute.normalize(path);

//se convierte a ruta absoluta (resolve)
//si hay errores de escritura, los resuelve para leerlos bien con "normalize"

/*funcion que lee archivo .md*/
function readMD (path) {
  const promise = new Promise ((resolve, reject) => {
    fs.readFile(path, "UTF-8", (error, data) => {
      if (error){
        reject(new Error ("Ups! No encontramos el archivo"+ path + ":(" ))
      }
      resolve(data);
      console.log(data);
    })
  })
  return promise
}
readMD(path)

/* extraer links */

const promiseLinks = new Promise ((resolve, rejetc) => {
  fs.readFile(path, "UTF-8", (error, data) => {
    if (error) {
      reject (new Error("NO LINKS :("))
    }
    let links = [];
    const renderer = new Marked.Renderer();
    renderer.link = function(href, title, text){
      links.push({
        href:href,
        text:text,
        file:path,
      })
    }
    Marked(data, {renderer:renderer});
    console.log(links)
  });
})
return promiseLinks
