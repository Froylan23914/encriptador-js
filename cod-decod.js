let txtEntrada = document.getElementById("entrada");
let areaSalida = document.getElementById("salida");
const llaves = {
	a:	"ai",
	e:	"enter",
	i:	"imes",
	o:	"ober",
	u:	"ufat"
}

function desencriptar(){
	let texto = txtEntrada.value;	
	let textoSalida="";
	let aux;
	for(let i=0;i<texto.length;i++){
		aux=texto.charAt(i);
		textoSalida+=aux;
		switch(aux){
			case "a":
			i+=llaves.a.length-1;
			break;
			case "e":
			i+=llaves.e.length-1;
			break;
			case "i":
			i+=llaves.i.length-1;
			break;
			case "o":
			i+=llaves.o.length-1;
			break;
			case "u":
			i+=llaves.u.length-1;
			break;
		}
	}
	areaSalida.value=textoSalida;
}

function encriptar(){
	let texto = txtEntrada.value;	
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

function copiar(){
	areaSalida.select();
	document.execCommand("copy");
}

