function resto() {
    letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L',
    'C', 'K', 'E', 'T'];
    dni = document.getElementById('dni').value;
    letr = document.getElementById('letra').value;
    formulario = document.getElementById("form");
    letra = letr.toUpperCase();
    pattern = new RegExp('^[A-Z]+$', 'i');

    if (dni < 0 || dni > 99999999 || isNaN(dni)) {
    alert("Introduce un número correcto en el campo DNI");
    formulario.reset();
    } else if (dni == "" || dni == " ") {
    alert("El DNI no puede estar vacío o con espacios");
    formulario.reset();
    } else if (dni.length < 8) {
    alert("El DNI debe tener 8 caracteres");
    formulario.reset();
    } else if (!pattern.test(letra)||letra.length >1) {
    alert("Introduce una letra en el campo LETRA.")
    formulario.reset();
    } else {
    dniLetra = letras[dni % 23];
    letraCalculo = dni + " " + dniLetra;
    document.getElementById("nif").innerHTML = letraCalculo;

    if (letra == dniLetra) {
        verde = document.createElement ("h1");
        verde.textContent = letra + '\n' +' ES CORRECTA';
        verde.setAttribute ("id", "verde")
        document.getElementById("resultado").appendChild(verde);
        document.getElementById("verde").style.color = 'green';

    } else {

        rojo = document.createElement("h3");
        rojo.textContent = letra + '\n' + " ES ERRÓNEA";
        rojo.setAttribute("id", "rojo");
        document.getElementById("resultado").appendChild(rojo);
        document.getElementById("rojo").style.color = "#ff0000";
        }
        
        formulario.reset();	
    }
}
var formulario = document.getElementById("form");
formulario.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("check").click();
    formulario.reset();
    }
});