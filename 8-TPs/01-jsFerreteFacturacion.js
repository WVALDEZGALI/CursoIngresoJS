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
    alert("La suma es $ " + resultado);
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
    alert(" EL promedio es $ " + resultado);
}
function PrecioFinal () 
{
	let preciouno;
    let preciodos;
    let preciotres;
    let sumadeprecios;
    let iva;
    let resultado;
    preciouno=parseFloat(document.getElementById("txtIdPrecioUno").value);
	preciodos=parseFloat(document.getElementById("txtIdPrecioDos").value);
    preciotres=parseFloat(document.getElementById("txtIdPrecioTres").value);
    sumadeprecios=preciouno+preciodos+preciotres;
    iva=sumadeprecios*.21;
    resultado=sumadeprecios+iva;
    alert(" La suma mas el IVA del 21% es $ " + resultado);
}