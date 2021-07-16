//RENZO ORPELLI DIV H
// TP 4 
/*Las lámparas están al mismo precio de $35 pesos final.
A. Si compra 6 o más lamparitas bajo consumo tiene un descuento del 50%.
B. Si compra 5 lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C. Si compra 4 lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D. Si compra 3 lamparitas bajo consumo marca "ArgentinaLuz" el descuento es del 15%, si es “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E. Si el importe final con descuento suma más de $120 se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje: ”IIBB Usted pago X”, siendo X el impuesto que se pagó.
*/
//Si empezas con un switch podes preguntar por cantidad o marca
function CalcularPrecio () 
{
    const precioLamparita = 35;
    var cantidadLamparitas;
    var marcaLampararitas;
    var precioFinal;
    var calculoLamparitas;

   
    cantidadLamparitas = txtIdCantidad.value;
    cantidadLamparitas = parseInt(cantidadLamparitas);
    marcaLampararitas = Marca.value;
    precioFinal = parseFloat(precioFinal)
    txtIdprecioDescuento.value = precioFinal;
   
 
    switch(cantidadLamparitas)
    {
        case 6:

        break;

    }
}






































/* const precioLamparita = 35;
 var cantidadLamparitas;
 var marcaLampararitas;
 var precioFinal;
 var calculoLamparitas;
 var ingresosBrutos;
 var calculoIIBB;
 const valorIIBB = 0.1;


 cantidadLamparitas = txtIdCantidad.value;
 cantidadLamparitas = parseInt(cantidadLamparitas);
 marcaLampararitas = Marca.value;
 precioFinal = parseFloat(precioFinal)
 txtIdprecioDescuento.value = precioFinal;
 calculoLamparitas= parseFloat(calculoLamparitas);
 calculoLamparitas = precioLamparita*cantidadLamparitas;
 calculoIIBB = parseFloat(calculoIIBB);    



 if (cantidadLamparitas>5)
 {
     precioFinal = calculoLamparitas - calculoLamparitas * 0.5;
     txtIdprecioDescuento.value = precioFinal;

 }
 else
 {
     if(cantidadLamparitas==5)
     {
         if(marcaLampararitas=="ArgentinaLuz")
         {
             precioFinal = calculoLamparitas - calculoLamparitas * 0.4;
             txtIdprecioDescuento.value = precioFinal;
         }
         else
         {
             if(marcaLampararitas!="ArgentinaLuz")
             {
                 precioFinal = calculoLamparitas - calculoLamparitas * 0.3;
                 txtIdprecioDescuento.value = precioFinal;
             }
         }
     }
     else
     {
       if(cantidadLamparitas==4)
       {
         if(marcaLampararitas=="ArgentinaLuz" || marcaLampararitas=="FelipeLamparas")
         {
             precioFinal = calculoLamparitas - calculoLamparitas * 0.25;
             txtIdprecioDescuento.value = precioFinal;
         }
         else 
         {
             if(marcaLampararitas)
             {
                 precioFinal = calculoLamparitas - calculoLamparitas * 0.20;
                 txtIdprecioDescuento.value = precioFinal;
             }
         }
       }
       else 
       {
         if(cantidadLamparitas==3)
         {
             if(marcaLampararitas=="ArgentinaLuz")
             {
                 precioFinal = calculoLamparitas - calculoLamparitas * 0.15;
                 txtIdprecioDescuento.value = precioFinal;
             }
             else
             {
                 if(marcaLampararitas=="FelipeLamparas")
                 {
                     precioFinal = calculoLamparitas - calculoLamparitas * 0.1;
                     txtIdprecioDescuento.value = precioFinal;
                 }
                 else
                 {
                     if(marcaLampararitas)
                     {
                         precioFinal = calculoLamparitas - calculoLamparitas * 0.05;
                         txtIdprecioDescuento.value = precioFinal;
                     }
                 }
             }
         }
         else 
         {
             if(cantidadLamparitas<3)
             {
                 precioFinal = precioLamparita*cantidadLamparitas;
                 txtIdprecioDescuento.value = precioFinal;
             } 
         }
       }   
     }  
 }
 
 if(precioFinal>120)
 {
     calculoIIBB = precioFinal * valorIIBB;           
     ingresosBrutos = precioFinal + (precioFinal*valorIIBB);
     alert("IIBB Usted pago " + ingresosBrutos + " Siendo de " + calculoIIBB + " el impuesto que se pagó" )
 }*/


    

