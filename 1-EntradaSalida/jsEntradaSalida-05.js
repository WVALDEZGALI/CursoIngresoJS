/*
Debemos lograr tomar nombre y edad por ID y mostrarlos concatenados 
ej.: "Usted se llama José y tiene 66 años" 	*/
function mostrar()
{	
	// reservo espacio para guardar el nombre y la edad del usuario.
	let nombre;
	let edad;
	nombre = document.getElementById("txtIdNombre").value;
	edad = parseFloat(document.getElementById("txtIdEdad").value);
    /* tomo los datos ingresados por el usuario y los muestro en un alert concatenando 
	con el caracter "+" entre literales de cadena y variables.*/
	alert("Usted se llama "+nombre+ " y tiene "+edad+" años")
	// tambien se puede hacer de esta manera.
	//alert(`usted se llama ${nombre} y tiene ${edad} años`);
	document.getElementById("txtIdNombre").value = "";	
    document.getElementById("txtIdEdad").value = "";
		
}

