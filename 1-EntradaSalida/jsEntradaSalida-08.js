/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	let dividendo;
	let divisor;
	let resultado;
	dividendo=parseFloat(document.getElementById("txtIdNumeroDividendo").value);
	divisor=parseFloat(document.getElementById("txtIdNumeroDivisor").value);
	resultado=dividendo%divisor;
	alert("El resto es "+resultado);
	document.getElementById("txtIdNumeroDividendo").value = "";	
    document.getElementById("txtIdNumeroDivisor").value = "";

	/*prioridades en las operaciones, mas prioridad * y / menos prioridad - y + si las operaciones
	tienen la misma prioridad la maquina empieza de izquierda a derecha. La prioridad maxima
	la tienen los ()*/
}
