//RENZO ORPELLI DIV H
// TP 3 

/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    var temperatura;
    var calculo;

    temperatura = parseFloat(temperatura);
    temperatura = txtIdTemperatura.value;
    calculo = (temperatura - 32) * 5/9;
    alert(calculo)

}

function CentigradosFahrenheit () 
{
	var temperatura;
    var calculo;

    temperatura = parseFloat(temperatura);
    temperatura = txtIdTemperatura.value;
    calculo = (temperatura * 9/5) + 32;
    alert(calculo)

}
