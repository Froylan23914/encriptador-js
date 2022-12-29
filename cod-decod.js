let txtEntrada = document.getElementById("entrada");
let areaSalida = document.getElementById("salida");
function encriptar(){
	let texto = txtEntrada.value;	
	areaSalida.innerHTML=texto;
}

function desencriptar(){
	alert("Desencriptar");
}

