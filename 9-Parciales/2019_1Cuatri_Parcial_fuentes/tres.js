//RENZO ORPELLI DIV H
//EJERCICIO 3 PARCIAL 2019

function mostrar()
{
    var precio;
    var porcentaje;
    var precioFinal;

    precio = prompt("Ingrese el precio");
    
    precio = parseFloat(precio);

    porcentaje = prompt("Igrese el descuento");

    porcentaje = parseFloat(porcentaje);

    precioFinal = precio - (precio * porcentaje / 100);

    elPrecioFinal.value = precioFinal

}

