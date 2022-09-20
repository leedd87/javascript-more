localStorage.setItem("nombre", "David");

sessionStorage.setItem("nombre", "Jorge");

//Agregar Objeto a localStorage
const producto = {
	nombre: "Monitor 24 pulgadas",
	precio: 300,
};

const productoString = JSON.stringify(producto);

console.log(productoString);

localStorage.setItem("producto", productoString);

//Agregar Array a localStorage
const meses = ["Enero", "Febrero", "Marzo"];
const mesesString = JSON.stringify(meses);

console.log(mesesString);

localStorage.setItem("meses", mesesString);
