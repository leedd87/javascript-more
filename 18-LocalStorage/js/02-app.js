//Obtener datos del localStorage

const nombre = localStorage.getItem("nombre");

console.log(nombre);

// const meses = localStorage.getItem("meses");

// console.log(meses);

const producto = localStorage.getItem("producto");

console.log(producto);

//Convertir el stringyfy a JSON.parse
const productoJson = JSON.parse(producto);

console.log(productoJson);

const mesesJson = JSON.parse(localStorage.getItem("meses"));

console.log(mesesJson);
