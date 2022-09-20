//Variables
const formulario = document.querySelector("#formulario");
const listTweets = document.querySelector("#lista-tweets");
let tweets = [];

//Event Listeners
eventListeners();

function eventListeners() {
	formulario.addEventListener("submit", agregarTweet);
}

//Funciones
function agregarTweet(e) {
	e.preventDefault();

	const tweet = document.querySelector("#tweet").value;

	//validacion
	if (tweet === "") {
		console.log("No puede ir vacio");
		return;
	}
	console.log("agregando tweet");
}
