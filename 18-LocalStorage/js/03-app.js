localStorage.removeItem("nombre");

//Actualizar un registro

const meses = localStorage.getItem("meses");

//Obtener la info como objeto (JSON.parse)

const mesesArray = JSON.parse(meses);

mesesArray.push("Nuevo mes");

console.log(mesesArray);

//JSON stringify => transformar objeto en string y poder guardarlo el localStorage
//JSON parse => transformar el string del localStorage al dato/objeto
localStorage.setItem("meses", JSON.stringify(mesesArray));
