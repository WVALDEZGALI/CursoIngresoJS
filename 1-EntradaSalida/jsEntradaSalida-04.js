/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	// reservo espacio para guardar el nombre del usuario.
	let nombre;
	// asigno en la variable nombre, el texto que escribio el usuario mediante la funcion prompt.
	nombre=prompt("escriba su nombre")
	// pongo el nombre que ingreso el usuario, dentro de la caja de texto embebida.
	document.getElementById("txtIdNombre").value=nombre
	//document.getElementById("txtIdNombre").value = "";
	
}

