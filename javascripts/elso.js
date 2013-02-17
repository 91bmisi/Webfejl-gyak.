var gomb, outputContainer;


function onClick(ev) {
	alert("eddig ezt nyomtad le:")
}

function setUp() {
	gomb = document.getElementById('gomb');
	outputContainer = document.getElementById('output');
	gomb.addEventListener('click', onClick);
}

document.addEventListener('DOMContentLoaded', setUp);
