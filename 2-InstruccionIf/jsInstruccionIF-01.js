function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	if(edad==15){alert("niña bonita");}
	
	document.getElementById("txtIdEdad").value = "";
}