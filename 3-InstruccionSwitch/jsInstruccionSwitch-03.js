function mostrar()
{
	let mes; 
	
	mes=document.getElementById("txtIdMes").value;

	switch(mes){

		case "Febrero":
			alert("Este mes no tiene más de 29 días.");
		break;

		default:
			alert("Este mes tiene 30 o más días.");
	
		//la funcion default agrupa todo lo que no entra en el case y se utiliza al final.
	}
	
	/*if(mes == "Febrero" ){

		alert("Este mes no tiene más de 29 días.");
	}

	else{

		alert("Este mes tiene 30 o más días.");

	}*/
	


}//FIN DE LA FUNCIÓN