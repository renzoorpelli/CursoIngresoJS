/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var num1;
	var num2;

	var num1 = document.getElementById("txtIdNumeroUno").value;
	var num2 = document.getElementById("txtIdNumeroDos").value;

	var num1= parseInt(num1);
	var num2= parseInt(num2);

	var Resultado = num1 + num2;
	alert(Resultado)
}

function restar()
{
	var num1;
	var num2;

	var num1 = document.getElementById("txtIdNumeroUno").value;
	var num2 = document.getElementById("txtIdNumeroDos").value;

	var num1= parseInt(num1);
	var num2= parseInt(num2);

	var Resultado = num1 - num2;
	alert(Resultado)
}

function multiplicar()
{ 
	var num1;
	var num2;

	var num1 = document.getElementById("txtIdNumeroUno").value;
	var num2 = document.getElementById("txtIdNumeroDos").value;
	var num1= parseInt(num1);
	var num2= parseInt(num2);

	var Resultado = num1 * num2;
	alert(Resultado)
}

function dividir()
{
	var num1;
	var num2;
	
	var num1 = document.getElementById("txtIdNumeroUno").value;
	var num2 = document.getElementById("txtIdNumeroDos").value;
	var num1= parseInt(num1);
	var num2= parseInt(num2);

	var Resultado = num1 / num2;
	alert(Resultado)
}

