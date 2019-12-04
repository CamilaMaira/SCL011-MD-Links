/*module.exports = () => {
};
*/

const fs = require ("fs");
const pathRoute = require ("path");
const Marked = require ("Marked");
const fetch = require ("node-fetch");

/*rescatar el link que se escribe en la terminal*/
let path = process.argv[2];
path = pathRoute.resolve(path);
path = pathRoute.normalize(path);

//se convierte a ruta absoluta (resolve)
//si hay errores de escritura, los resuelve para leerlos bien con "normalize"

/*funcion que lee archivo .md*/

const readMD = (path => {
  let promise = new Promise ((resolve, reject) => {
    fs.readFile(path, "UTF-8", (error, data) => {
      if(error){
        reject(new Error("UPS! No encontramos el archivo"))
      }
      resolve(data);
      console.log(data)
    })
  })
  return promise
})
readMD(path)


/* lee archivos y extraer links con info */

let getLinks = () => {
  return new Promise ((resolve, reject) => {
    fs.readFile(path, "UTF-8", (error, data) => {
      if (error) {
        reject(new Error("ERRRORR!"));
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
      resolve(links)
    })
  })
}
getLinks() 

// validar links, ojala

const validate = () => {
getLinks(path).then((links) => {
  links.map(element => {
    return fetch(element.href).then(res => {
      if (res.ok){
        console.log(res.statusText)
      }
    })
    .catch((err => {
      console.log(err.statusText)
    }))
  })
})}

validate() 



/*const validate = (links) => {
  return Promise.all(links.map(validateLinks => {
    return new Promise((resolve) => {
      fetch(validateLinks.href)
      .then(res => {
        if (res.ok){
          validateLinks.status = res.status;
          validateLinks.status = res.statusText;
          resolve(validateLinks)
        }
      })
      .catch((err => {
        validateLinks.status = 0;
        validateLinks.statusText = err.code;
        resolve(validateLinks);
      }))
    })
  }))
}
*/