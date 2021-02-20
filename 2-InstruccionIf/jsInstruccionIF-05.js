function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	//dentro de un if puedo agregar un segundo if para tomar un intervalo.
	if(edad<=12){
		
		if(edad>=18){

			alert("No es adolescente");
		}

	}
	//else{alert("Menor de edad");}

	document.getElementById("txtIdEdad").value = "";	

}