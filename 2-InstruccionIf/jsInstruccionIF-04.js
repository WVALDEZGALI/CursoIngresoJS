function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	//dentro de un if puedo agregar un segundo if para tomar un intervalo.
	if(edad>=13){
		
		if(edad<=17){

			alert("Es adolescente");
		}

	}
	//else{alert("Menor de edad");}

	document.getElementById("txtIdEdad").value = "";
}