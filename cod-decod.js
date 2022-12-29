let txtEntrada = document.getElementById("entrada");
let areaSalida = document.getElementById("salida");
const llaves = {
	a:	"ai",
	e:	"enter",
	i:	"imes",
	o:	"ober",
	u:	"ufat"
}

function encriptar(){
	let texto = txtEntrada.value;	
	txtEntrada.value="";
	let textoSalida="";
	for(let i=0;i<texto.length;i++){
		switch(texto.charAt(i)){
			case "a":
			textoSalida+=llaves.a;
			break;
			case "e":
			textoSalida+=llaves.e;
			break;
			case "i":
			textoSalida+=llaves.i;
			break;
			case "o":
			textoSalida+=llaves.o;
			break;
			case "u":
			textoSalida+=llaves.u;
			break;
			default:
			textoSalida+=texto.charAt(i);
		}
	}
	areaSalida.value=textoSalida;
}

function desencriptar(){
	alert("Desencriptar");
}

