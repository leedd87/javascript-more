//Variables
const formulario = document.querySelector("#formulario");
const listaTweets = document.querySelector("#lista-tweets");
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
		mostrarError("No puede ir vacio");
		return;
	}

	const tweetObj = {
		id: Date.now(), //para que cada tweet tenga un id unico
		//texto: tweet,
		tweet,
	};

	//Agregar tweets
	tweets = [...tweets, tweetObj];

	//Agregar los tweets, creando el HTML
	crearHtml();

	//Reiniciar el formulario
	formulario.reset();
}

//Mostrar mensaje de error
function mostrarError(error) {
	const mensajeError = document.createElement("p");
	mensajeError.textContent = error;
	mensajeError.classList.add("error");

	//Insertar en DOM
	const contenido = document.querySelector("#contenido");
	contenido.appendChild(mensajeError);

	//Elimina la alerta despues de 3sg
	setTimeout(() => {
		mensajeError.remove();
	}, 1500);
}

//Muestra listado de los tweets
function crearHtml() {
	limpiarHTML();

	if (tweets.length > 0) {
		tweets.forEach((tweet) => {
			//crear el HTML
			const li = document.createElement("li");

			//aniadir el texto
			li.innerText = tweet.tweet;

			//insertar en el html
			listaTweets.appendChild(li);
		});
	}
}

//limpiar el HTML
function limpiarHTML() {
	while (listaTweets.firstChild) {
		listaTweets.removeChild(listaTweets.firstChild);
	}
}
