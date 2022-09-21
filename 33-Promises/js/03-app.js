const aplicarDescuento = new Promise((resolve, reject) => {
	const descuento = false;

	if (descuento) {
		resolve("Descuento aplicado");
	} else {
		reject("No se pudo aplicar el descuento");
	}
});

aplicarDescuento
	.then((resultado) => {
		console.log(resultado);
	})
	.catch((error) => console.log(error));

//Hay 3 valores posibles de las promises...
//fulfilled = el promise se cumplio
//rejected = el promise no se cumplio
//pending = aun no se cumplio el promise ni fue rechazado
