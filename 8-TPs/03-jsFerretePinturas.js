/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	let temperatura;
    let gradosfahrenheit;
    temperatura=parseFloat(document.getElementById("txtIdTemperatura").value);
    const FAHRENHEIT=(temperatura-32)*5/9;
    gradosfahrenheit=FAHRENHEIT
    alert(temperatura+" grados fahrenhei equivalen a "+gradosfahrenheit.toFixed(2)+" grados centigrados")
}

function CentigradosFahrenheit () 
{
	let temperatura;
    let gradoscentigrados;
    temperatura=parseFloat(document.getElementById("txtIdTemperatura").value);
    const CENTIGRADOS=(temperatura*9/5)+32
    gradoscentigrados=CENTIGRADOS
    alert(temperatura+" grados centigrados equivalen a "+gradoscentigrados.toFixed(2)+" grados fahrenheit")
}
