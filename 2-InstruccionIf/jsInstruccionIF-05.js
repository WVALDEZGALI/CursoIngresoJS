function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	//La edad debe estar fuera del rango de 13 a 17 años, es decir menor a 13 o mayor a 17.
	if(edad < 13 || edad > 17) {


		alert("No es adolescente");
	}

	document.getElementById("txtIdEdad").value = "";	

}