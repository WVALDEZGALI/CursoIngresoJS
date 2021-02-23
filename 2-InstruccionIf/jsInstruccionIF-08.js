function mostrar()
{

	let edad;
	let estadocivil;
	
	edad=parseFloat(document.getElementById("txtIdEdad").value);
	estadocivil=document.getElementById("estadoCivil").value;

	//con or las dos son falsas por lo tanto es falso y al negarlo da verdadero.
	//if(  !(edad<18 || estadocivil != "Soltero")) {
	
	//con and las dos son verdaderas por lo tanto es verdadero y muestra el alert.
	if (edad >= 18 && estadocivil == "Soltero") {
	
		alert("Es soltero y no es menor");
	}

}//FIN DE LA FUNCIÓN