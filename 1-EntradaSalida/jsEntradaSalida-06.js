/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	//Declaro las variables numero 1, numero 2 y resultado
	let numero1;
	let numero2;
	let resultado;
	//Asigno los valores que introduce el usuario en las cajas embebidas. funcion getElementById
	//numero1 = document.getElementById("txtIdNumeroUno").value;
	//numero2 = document.getElementById("txtIdNumeroDos").value;
	//Convierto los valores a numeros enteros con la funcion parseInt(), parseFloat()
	numero1=parseFloat(document.getElementById("txtIdNumeroUno").value);
	numero2=parseFloat(document.getElementById("txtIdNumeroDos").value);
	//Asigno el valor de la variable resultado.
	resultado=numero1+numero2;
	//Muestro el resultado de sumar las dos variables en un alert()
	alert("las sumas es "+resultado);
	document.getElementById("txtIdNumeroUno").value = "";	
    document.getElementById("txtIdNumeroDos").value = "";

		
}

