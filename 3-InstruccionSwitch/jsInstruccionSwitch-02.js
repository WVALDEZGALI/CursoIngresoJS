function mostrar()
{
	let mes; 
	
	mes=document.getElementById("txtIdMes").value;

	switch(mes){

		/*break finaliza la accion, se puede poner en el final de varios case para agrupar comportamientos
		similares*/
		case "Julio":
		case "Agosto":
		alert("Abrigate que hace frio.");
		break;

		case "Enero":
		case "Febrero":
		case "Marzo":
		case "Abril":
		case "Mayo":
		case "Junio":
		alert("Falta para el invierno.");
		break;

		case "Septiembre":
		case "Octubre":
		case "Noviembre":
		case "Diciembre":
		alert("Ya pasamos el frio, ahora calor!!!.");
		break;
	}




}//FIN DE LA FUNCIÓN