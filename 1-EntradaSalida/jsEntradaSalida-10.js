/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importe;
	var cuenta;
	var descuento;

	importe = txtIdImporte.value;

	importe = parseFloat(importe);

	descuento = prompt("descuento");

	descuento = parseFloat(descuento);

	cuenta = importe - (importe * descuento / 100);

	txtIdResultado.value = cuenta;
}
	/*
	var num1;
	var num1 = document.getElementById("txtIdImporte").value;
	document.getElementById("txtIdResultado").value = parseInt(num1) - (num1*25) / 100 ;*/


