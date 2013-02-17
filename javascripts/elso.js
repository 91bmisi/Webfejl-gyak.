var gomb;
var tomb = new Array();
var szamlalo = 0;
var msg;

function minden() {
	for(szamlalo=0;szamlalo<tomb.length;szamlalo++) {
		msg=msg+tomb[szamlalo];
	}	
}

function onClick(ev) {
	minden();
	alert(msg);
}

function reactKey(evt) {
   alert("Ez még látszik?");
}

function setUp() {
	gomb = document.getElementById('gomb');
	gomb.addEventListener('click', onClick);
	forma = document.onkeypress;
	forma.addEventListener('onkeypress', reactKey)
	
}

document.addEventListener('DOMContentLoaded', setUp);
