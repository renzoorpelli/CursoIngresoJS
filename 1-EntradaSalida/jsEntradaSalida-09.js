/*
Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var num1 = document.getElementById("txtIdSueldo").value;
	document.getElementById("txtIdResultado").value = parseInt(num1) + (num1*10) / 100 ;
}
