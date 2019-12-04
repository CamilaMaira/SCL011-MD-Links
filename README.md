## **MD-LINKS**

#### Para poder ejecutar esta librería necesitas tener instalado [Node.js](https://nodejs.org/) en tu compu.

**¿Qué es MD-Links?**
MD-Links es una librería que permite extraer links de archivos en formato Markdown *(.md)*. Este módulo de Node.js es capaz de devolver y verificar las url almacenadas en el archivo.

### **Modo de Uso**

1. El primer paso es la **instalación**, para llevarla acabo ejecuta lo siguiente en tu terminal.

	 `npm install .....-md-links ` 

2. Para hacer uso de la librería escribe el siguiente comando:

	`node index.js archivo.md`
	
	Ejemplo:
`node index.js readme.md`
`node index.js estoesunarchivomd.md`

**¡OJO!** *archivo.md* es el nombre del archivo que deseas analizar y verificar. 

3. Al presionar **enter** en tu terminal se imprimirá una lista de todos los links encontrados dentro del archivo. Podrás encontrar el link, nombre del enlace y ruta del archivo *(href, text y file)* y junto con ello si este links es válido o no. 