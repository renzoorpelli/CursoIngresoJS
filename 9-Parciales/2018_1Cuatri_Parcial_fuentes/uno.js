// RENZO ORPELLI DIV H
// EJERCICIO 1 PARCIAL 2018
//Realizar el algoritmo que pida el ancho y el largo de un rectángulo por prompt y que muestre el perímetro por alert.
function mostrar()
{
    var anchoRectangulo;
    var largoRectangulo;
    var perimetroRectangulo;

    largoRectangulo = prompt("Ingrese el largo del Rectángulo: ");
    anchoRectangulo = prompt("Ingrese el ancho del Rectángulo: ");

    largoRectangulo = parseFloat(largoRectangulo);
    anchoRectangulo = parseFloat(anchoRectangulo);

    perimetroRectangulo = (largoRectangulo + anchoRectangulo) * 2;

    alert("El períemtro del rectángulo son: " +  perimetroRectangulo + "cm")

}
