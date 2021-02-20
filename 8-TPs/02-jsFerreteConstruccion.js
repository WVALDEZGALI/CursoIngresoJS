/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    let largo;
    let ancho;
    let perimetro;
    let alambre;
    largo=parseFloat(document.getElementById("txtIdLargo").value);
	ancho=parseFloat(document.getElementById("txtIdAncho").value);
    perimetro=(ancho+largo)*2;
    alambre=perimetro*3;
    alert("La cantidad de alambre es "+ alambre + " metros");
}
function Circulo () 
{
    let radio;
    let perimetro;
    let alambre;
    // para declarar constantes se debe hacer en mayusculas;
    const PI=3.14; 
    radio=parseFloat(document.getElementById("txtIdRadio").value)
    perimetro=2*PI*radio;
    alambre=perimetro*3;
    alert("La cantidad de alambre es "+ alambre + " metros");
}
function Materiales () 
{
	let largo;
    let ancho;
    let area;
    let cemento;
    let cal;
    //al declarar constantes con mas de una palabra se deben separa por un guin bajo "_";
    const CEMENTO_X_METRO=2
    const CAL_X_METRO=3
    largo=parseFloat(document.getElementById("txtIdLargo").value);
	ancho=parseFloat(document.getElementById("txtIdAncho").value);
    area=ancho*largo;
    cemento=area*CEMENTO_X_METRO;
    cal=area*CAL_X_METRO;
    alert(`Para un contrapiso de ${area} m2 necesito comprar ${cemento} bolsas de cemento y ${cal} bolsas de cal`)
}