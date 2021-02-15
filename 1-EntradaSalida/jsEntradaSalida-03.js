/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
	let nombre;
	nombre = document.getElementById("txtIdNombre").value; 
	//nombre = txtIdNombre.value; es equivalente a la linea anterior, pero no es el standart.
	alert(nombre);
	document.getElementById("txtIdNombre").value = "";

}


