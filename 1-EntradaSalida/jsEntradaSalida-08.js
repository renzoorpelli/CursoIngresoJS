/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var num1 = document.getElementById("txtIdNumeroDividendo").value;
	var num2 = document.getElementById("txtIdNumeroDivisor").value;

	var resultado = parseInt(num1) % parseInt(num2);

	alert(resultado)
}
