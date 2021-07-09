//RENZO ORPELLI DIV H
//EJERCICIO TP 2 FERRETE CONSTRUCCION

/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
    var largoTerreno;  
    var anchoTerreno;    
    var totalMetrosTerreno;
    var totalAlambre;

    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;

    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);

    totalMetrosTerreno = (largoTerreno + anchoTerreno) * 2 // 

    totalAlambre = totalMetrosTerreno * 3;

    alert("Se necesitan "+totalAlambre + " metros de alambre.")
}
function Circulo () 
{
    var radioTerreno;
    var diametro;
    var totalAlambre;
    
    radioTerreno = txtIdRadio.value;
    radioTerreno = parseInt(radioTerreno);

    diametro = radioTerreno * 2;
    totalAlambre = diametro * 3;
   
    alert("Se necesitan " + totalAlambre + " metros de alambre");

}
function Materiales () 
{
	var largoTerreno;  
    var anchoTerreno; 
    var totalMetrosTerreno;
    var bolsasDeCemento;
    var bolsasDeCal;
    var totalBolsasDeCal;
    var totalBolsasDeCemento;
    
    bolsasDeCemento = 2;
    bolsasDeCal = 3;
    largoTerreno = txtIdLargo.value;
    anchoTerreno = txtIdAncho.value;    
    largoTerreno = parseFloat(largoTerreno);
    anchoTerreno = parseFloat(anchoTerreno);
    totalMetrosTerreno = (largoTerreno + anchoTerreno) * 2;
    totalBolsasDeCal = totalMetrosTerreno * bolsasDeCal;
    totalBolsasDeCemento = totalMetrosTerreno * bolsasDeCemento;
    alert("Usted necesita " + totalBolsasDeCal + " bolsas de cal Y " + totalBolsasDeCemento + " bolsas de cemento.")

}