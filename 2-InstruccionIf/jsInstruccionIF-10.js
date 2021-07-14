//RENZO ORPELLI DIV H
//EJERCICIO 10 IF
/*Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4*/
function mostrar()
{
	var random;
	random = Math.floor(Math.random() * 11);
	
	if (random>8){
		alert("su nota es " + random + " Excelente")
	}else{
		if(random>=4){
			alert("Su nota es " + random + " Aprobado")
		}else {
			alert("Su nota es " + random + " Vamos, la proxima se puede")

		}
	}

}//FIN DE LA FUNCIÓN
