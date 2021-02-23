function mostrar()
{
	let nota;
	let maximo = 10;
	let minimo = 1;

	nota = Math.round(Math.random () * (maximo - minimo) + minimo);

	if ( nota >= 9){


		alert("Nota " + nota + " EXCELENTE");
	}

	else if( nota >=4){

		alert("Nota " + nota + " APROBÓ");

	}
	
	else{

		alert("Nota " + nota + " Vamos, la proxima se puede")
	}

}//FIN DE LA FUNCIÓN