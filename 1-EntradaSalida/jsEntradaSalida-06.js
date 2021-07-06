const { parse } = require("path/posix");

/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var num1 = document.getElementById("txtIdNumeroUno").value;
	var num2 = document.getElementById("txtIdNumeroDos").value;

	var Resultado = parseInt(num1) + parseInt(num2);

	alert(Resultado)
}

