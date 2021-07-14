/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 
//dejar con una variable
 */
function CalcularPrecio () 
{
 	const precioLampara = 35;
    var cantidadLamparitas;
    var precioFinal;
    var marcaLamparitas;
    var descuento;


    marcaLamparitas = Marca.value
    precioFinal = parseFloat(precioFinal);
    precioFinal = (cantidadLamparitas * precioLampara); 
    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
   
    if (cantidadLamparitas<5){
        Descuento = precioFinal - (precioFinal * 50) /100;
        txtIdprecioDescuento.value = descuento;
    }








}

/*
    if (cantidadLamparitas>5){
        primerDescuentoA = precioFinal - (precioFinal * 50) /100;
        txtIdprecioDescuento.value = primerDescuentoA;
    }
    else{
        if(cantidadLamparitas==5 && marcaLamparitas=="ArgentinaLuz"){//
            segundoDescuentoB = precioFinal - (precioFinal * 40) /100;
            txtIdprecioDescuento.value = segundoDescuentoB;
        } else {
            if(cantidadLamparitas==5 && marcaLamparitas !="ArgentinaLuz"){
                segundoDescuentoB = precioFinal - (precioFinal * 30) /100;
                txtIdprecioDescuento.value = segundoDescuentoB;
            }else {
                if(cantidadLamparitas==4 && marcaLamparitas == "ArgentinaLuz" && "FelipeLamparas"){//||
                    tercerDescuentoC = precioFinal - (precioFinal * 25) /100;
                    txtIdprecioDescuento.value = tercerDescuentoC;
                }else{
                    if(cantidadLamparitas==4 && marcaLamparitas !="FelipeLamparas" ){
                        tercerDescuentoC = precioFinal - (precioFinal * 20) /100;
                        txtIdprecioDescuento.value = tercerDescuentoC;
                    }else{
                        if(cantidadLamparitas==3 && marcaLamparitas=="ArgentinaLuz"){
                            cuartoDescuentoD = precioFinal - (precioFinal * 15) /100;
                            txtIdprecioDescuento.value = cuartoDescuentoD;
                        }else {
                            if(cantidadLamparitas==3 && marcaLamparitas=="FelipeLamparas"){
                                cuartoDescuentoD = precioFinal - (precioFinal * 10) /100;
                                txtIdprecioDescuento.value = cuartoDescuentoD;
                            }else {
                                if(cantidadLamparitas==3 && marcaLamparitas !="FelipeLamparas"){
                                    cuartoDescuentoD = precioFinal - (precioFinal * 5) /100;
                                    txtIdprecioDescuento.value = cuartoDescuentoD;
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    if (primerDescuentoA>120){
        ingresosBrutos = primerDescuentoA + (primerDescuentoA*10) / 100;
        alert("Usted pago " + "$" + ingresosBrutos + " de IIBB")

    }
*/


    

