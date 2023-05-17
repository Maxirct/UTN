function calcularDistancia() {
    var planet1 = document.getElementById("distancia1").value;
    var planet2 = document.getElementById("distancia2").value;

    var distancia;

    if (planet1 === planet2) {
        distancia = 0;
    } else if (planet1 === "mars" && planet2 === "jupiter") {
        distancia = 628.743; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "mars" && planet2 === "saturn") {
        distancia = 1277.59; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "jupiter" && planet2 === "mars") {
        distancia = 628.743; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "jupiter" && planet2 === "saturn") {
        distancia = 649.929; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "saturn" && planet2 === "mars") {
        distancia = 1277.59; // Distancia promedio en millones de kilómetros
    } else if (planet1 === "saturn" && planet2 === "jupiter") {
        distancia = 649.929; // Distancia promedio en millones de kilómetros
    }

    var resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "La distancia entre " + planet1 + " y " + planet2 + " es de " + distancia + " millones de kilómetros.";
}