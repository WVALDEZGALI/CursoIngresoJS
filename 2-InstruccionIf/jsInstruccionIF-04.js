function mostrar()
{
	let edad;

	edad=parseFloat(document.getElementById("txtIdEdad").value);

	/*operadores logicos or "o" en español y se simboliza con el doble pipe "││" 
	and "y" en español y se simboliza con el doble ampersand "&&" y el not "no" en 
	español y se simboliza con el signo de admiracion "!"*/
	if(edad>=13 && edad<=17){

		alert("Es adolescente");

	}
	
	// si no estoy afuera del rango haciendo el ejercicio de manera contraria

	/*if( !(edad < 13 || edad>17)  ){


		alert("Es adolescente");
	}*/

	document.getElementById("txtIdEdad").value = "";
}