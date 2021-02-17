/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let preciouno;
    let preciodos;
    let preciotres;
    let resultado;
    preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
	preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado=preciouno+preciodos+preciotres;
    alert(resultado);
}
function Promedio () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let resultado;
    preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
	preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    resultado=(preciouno+preciodos+preciotres)/3;
    alert(resultado);
}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let sumadeprecios;
    let resultado;
    preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
	preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumadeprecios=preciouno+preciodos+preciotres;
    resultado=sumadeprecios*.21+sumadeprecios;
    alert(resultado);
}