function calcularDistancia() {
    var planet1 = document.getElementById("distancia1").value;
    var planet2 = document.getElementById("distancia2").value;

    var distancia;

    if (planet1 === planet2) {
        distancia = 0;
    } else if (planet1 === "Tierra" && planet2 === "Próxima Centauri") {
        distancia = 4.243; // Distancia promedio en años luz
    } else if (planet1 === "Tierra" && planet2 === "La Galaxia Remolino") {
        distancia = 31.5; // Distancia promedio en millones de años luz
    } else if (planet1 === "Tierra" && planet2 === "Kepler-452b") {
        distancia = 1400; // Distancia promedio en años luz
    } else if (planet1 === "Tierra" && planet2 === "Agujero negro TON 618") {
        distancia = 10.37; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Tierra" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 163000; // Distancia promedio en años luz
    } else if (planet1 === "Tierra" && planet2 === "Galaxia IC 1101") {
        distancia = 1040; // Distancia promedio en millones de años luz
    } else if (planet1 === "Tierra" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 520; // Distancia promedio en millones de años luz
    } else if (planet1 === "Tierra" && planet2 === "La gran muralla de Hércules") {
        distancia = 1100; // Distancia promedio en millones de años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Tierra") {
        distancia = 4.243; // Distancia promedio en años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "La Galaxia Remolino") {
        distancia = 27.9; // Distancia promedio en millones de años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Kepler-452b") {
        distancia = 1380; // Distancia promedio en años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Agujero negro TON 618") {
        distancia = 14.48; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Galaxia IC 1101") {
        distancia = 1035; // Distancia promedio en millones de años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 516; // Distancia promedio en millones de años luz
    } else if (planet1 === "Próxima Centauri" && planet2 === "La gran muralla de Hércules") {
        distancia = 1096; // Distancia promedio en millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Tierra") {
        distancia = 31.5; // Distancia promedio en millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Próxima Centauri") {
        distancia = 27.9; // Distancia promedio en millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Kepler-452b") {
        distancia = 1350; // Distancia promedio en años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Agujero negro TON 618") {
        distancia = 18.08; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Galaxia IC 1101") {
        distancia = 1015; // Distancia promedio en millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 509; // Distancia promedio en millones de años luz
    } else if (planet1 === "La Galaxia Remolino" && planet2 === "La gran muralla de Hércules") {
        distancia = 1079; // Distancia promedio en millones de años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Tierra") {
        distancia = 1400; // Distancia promedio en años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Próxima Centauri") {
        distancia = 1380; // Distancia promedio en años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "La Galaxia Remolino") {
        distancia = 1350; // Distancia promedio en años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Agujero negro TON 618") {
        distancia = 19.34; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Galaxia IC 1101") {
        distancia = 1005; // Distancia promedio en millones de años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 504; // Distancia promedio en millones de años luz
    } else if (planet1 === "Kepler-452b" && planet2 === "La gran muralla de Hércules") {
        distancia = 1070; // Distancia promedio en millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Tierra") {
        distancia = 10.37; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Próxima Centauri") {
        distancia = 14.48; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "La Galaxia Remolino") {
        distancia = 18.08; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Kepler-452b") {
        distancia = 19.34; // Distancia promedio en miles de millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Galaxia IC 1101") {
        distancia = 955; // Distancia promedio en millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 484; // Distancia promedio en millones de años luz
    } else if (planet1 === "Agujero negro TON 618" && planet2 === "La gran muralla de Hércules") {
        distancia = 1036; // Distancia promedio en millones de años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Tierra") {
        distancia = 163000; // Distancia promedio en años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Próxima Centauri") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "La Galaxia Remolino") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Kepler-452b") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Agujero negro TON 618") {
        distancia = 162000; // Distancia promedio en años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Galaxia IC 1101") {
        distancia = 940; // Distancia promedio en millones de años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 475; // Distancia promedio en millones de años luz
    } else if (planet1 === "Nebulosa de la Tarántula" && planet2 === "La gran muralla de Hércules") {
        distancia = 1026; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Tierra") {
        distancia = 1040; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Próxima Centauri") {
        distancia = 1035; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "La Galaxia Remolino") {
        distancia = 1015; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Kepler-452b") {
        distancia = 1005; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Agujero negro TON 618") {
        distancia = 955; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 940; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 465; // Distancia promedio en millones de años luz
    } else if (planet1 === "Galaxia IC 1101" && planet2 === "La gran muralla de Hércules") {
        distancia = 1011; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Tierra") {
        distancia = 520; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Próxima Centauri") {
        distancia = 516; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "La Galaxia Remolino") {
        distancia = 509; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Kepler-452b") {
        distancia = 504; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Agujero negro TON 618") {
        distancia = 484; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 475; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "Galaxia IC 1101") {
        distancia = 465; // Distancia promedio en millones de años luz
    } else if (planet1 === "Supercúmulo galáctico Laniakea" && planet2 === "La gran muralla de Hércules") {
        distancia = 1003; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Tierra") {
        distancia = 1100; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Próxima Centauri") {
        distancia = 1096; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "La Galaxia Remolino") {
        distancia = 1079; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Kepler-452b") {
        distancia = 1070; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Agujero negro TON 618") {
        distancia = 1036; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Nebulosa de la Tarántula") {
        distancia = 1026; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Galaxia IC 1101") {
        distancia = 1011; // Distancia promedio en millones de años luz
    } else if (planet1 === "La gran muralla de Hércules" && planet2 === "Supercúmulo galáctico Laniakea") {
        distancia = 1003; // Distancia promedio en millones de años luz
    }
    document.getElementById("resultado").innerHTML = 'La distancia calculada es: ' + distancia + ' años luz.';
}
/* ---------------------------------------- BOTON RAMDOM ---------------------------------------- */
document.getElementById("randomButton").addEventListener("click", function () {
    var pages = [
        "noticiauno.html",
        "noticiados.html",
        "noticiatres.html",
        "noticiacuatro.html",
        "noticiacinco.html",
        "noticiaseis.html",
    ];

    var randomIndex = Math.floor(Math.random() * pages.length);
    var randomPage = pages[randomIndex];

    window.location.href = randomPage;
});
/* ---------------------------------------- CLOSE ---------------------------------------- */
function changeIconAndGoBack() {
    var icon = document.getElementById("icon");
    icon.classList.toggle("bi-x-circle-fill");
    icon.classList.toggle("bi bi-x-circle");
    goBack();
}

function goBack() {
    window.history.back();
}