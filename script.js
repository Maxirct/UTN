function calcularDistancia() {
    var planet1 = document.getElementById("distancia1").value;
    var planet2 = document.getElementById("distancia2").value;

    var distancia;

    if (planet1 === planet2) {
        distancia = 0;
    } else if (planet1 === "Marte" && planet2 === "Jupiter") {
        distancia = 628.743; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "Marte" && planet2 === "Saturno") {
        distancia = 1277.59; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "Jupiter" && planet2 === "Marte") {
        distancia = 628.743; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "Jupiter" && planet2 === "Saturno") {
        distancia = 649.929; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "Saturno" && planet2 === "Marte") {
        distancia = 1277.59; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "Saturno" && planet2 === "Jupiter") {
        distancia = 649.929; // Distancia promedio en millones de kilómetros
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La distancia entre " + planet1 + " y " + planet2 + " es de " + distancia + " millones de kilómetros.";
}