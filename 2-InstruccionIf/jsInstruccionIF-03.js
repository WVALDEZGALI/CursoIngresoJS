function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	if(edad>=18){
		
		alert("Mayor de edad");
	}

	else{
		
		alert("Menor de edad");
	}
	
	document.getElementById("txtIdEdad").value = "";
}