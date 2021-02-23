function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	if(edad>=13 && edad<=17){
		alert("Es adolescente");
	}
	
	if(edad>=18){
		alert("Mayor de edad");
	
	} 
	if(edad<=12){
		
		alert("Es niño");
	
	}

	//esta forma con else if, se ponen condiciones dentro del else y al final queda el else solo.
	/*let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);
	if(edad <=12){

		alert("Es niño");
	}
	else if(edad<=17){

		alert("Es adolescente");
	}
	else if(edad<=65){

		alert("Es mayor de edad");
	}
	else{

		alert("Es anciano");
	}*/
}