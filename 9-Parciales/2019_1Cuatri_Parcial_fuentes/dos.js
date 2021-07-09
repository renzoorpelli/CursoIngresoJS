function mostrar()
{
  var NamePareja1;
  var NamePareja2;
  var PesoPareja1;
  var PesoPareja2;
  var pesosJuntos; 
  var promedioPeso; 

  NamePareja1 = prompt("Su Nombre es: ");
  NamePareja2 = prompt("Su Nombre es: ");


  PesoPareja1 = prompt("Ingrese el peso de " + NamePareja1);
  PesoPareja2 = prompt("Ingrese el peso de " + NamePareja2);

  PesoPareja1 = parseFloat(PesoPareja1);
  PesoPareja2 = parseFloat(PesoPareja2);


  pesosJuntos = PesoPareja1 + PesoPareja2;

  promedioPeso = PesoPareja1 + PesoPareja2 / 2;
  
  alert("Ustedes se llaman " + NamePareja1 + " y " +NamePareja2 + " , Pesan " + PesoPareja1 +"KG"+  " y " +  PesoPareja2 + "KG"+ ", que sumados sus kilos son " + pesosJuntos +" KG" + " y el promedio de peso es: " + promedioPeso + "KG");

}
