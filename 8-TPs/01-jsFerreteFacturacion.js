//REMZO ORPELLI DIV H
// TP 1 
/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var PrecioUno;
	var PrecioDos; 
	var PrecioTres;
    var sumaFinal;
    PrecioUno = txtIdPrecioUno.value;
    PrecioDos = txtIdPrecioDos.value;
    PrecioTres = txtIdPrecioTres.value;
    PrecioUno= parseFloat(PrecioUno);
    PrecioDos= parseFloat(PrecioDos);
    PrecioTres= parseFloat(PrecioTres);
    sumaFinal = PrecioUno + PrecioDos + PrecioTres;
    alert("El precio por la suma de los tres productos es:  " +" $"+ sumaFinal);


}
function Promedio () 
{
	var PrecioUno;
	var PrecioDos; 
	var PrecioTres;
    var calculoFinal;
    PrecioUno = txtIdPrecioUno.value;
    PrecioDos = txtIdPrecioDos.value;
    PrecioTres = txtIdPrecioTres.value;
    PrecioUno= parseFloat(PrecioUno);
    PrecioDos= parseFloat(PrecioDos);
    PrecioTres= parseFloat(PrecioTres);
    calculoFinal = (PrecioUno + PrecioDos + PrecioTres) / 3;
    alert("El promedio por la suma de los tres productos es:  " +" $"+ calculoFinal);

}
function PrecioFinal () 
{
	var PrecioUno;
	var PrecioDos; 
	var PrecioTres;
    var calculoFinal;
    var sumaProductos;
    PrecioUno = txtIdPrecioUno.value;
    PrecioDos = txtIdPrecioDos.value;
    PrecioTres = txtIdPrecioTres.value;
    PrecioUno= parseFloat(PrecioUno);
    PrecioDos= parseFloat(PrecioDos);
    PrecioTres= parseFloat(PrecioTres);
    sumaProductos= PrecioUno + PrecioDos + PrecioTres;
    calculoFinal = sumaProductos + (sumaProductos * 21 / 100) ;
    alert("El precio final por los tres productos más IVA es de:  " +" $"+ calculoFinal);
}

//txtIdPrecioUno, txtIdPreciodOS , txtIdPrecioTres