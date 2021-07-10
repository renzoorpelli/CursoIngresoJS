//RENZO ORPELLI DIV H 
// EJERCICIO 3 PARCIAL 2018
//Pedir por prompt el precio y el porcentaje de descuento, mostrar el precio final con descuento por id.
function mostrar()
{
    var precioInicial;
    var porcentajeDescuento;
    var precioFinal;
    precioInicial = prompt("Ingrese el precio Inicial: ");
    precioInicial = parseFloat(precioInicial);
    porcentajeDescuento = prompt("Ingrese el porcentaje de descuento: ");
    porcentajeDescuento = parseInt(porcentajeDescuento);
    precioFinal = precioInicial - (precioInicial * porcentajeDescuento/ 100);
    elPrecioFinal.value = precioFinal;
}
