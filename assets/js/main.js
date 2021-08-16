function numeroDeEnlaces() {
    var listaMenuCentral = document.getElementsByClassName("lista-menu-central");

    //numero de href en el menú central
    var enlaces = document.getElementsByTagName("a");
    listaMenuCentral.innerHTML = "Numero de enlaces = " + enlaces.length;
    console.log(listaMenuCentral.innerHTML);
}

function buscarDiv() {
    var listadoMenu = document.getElementById("menu-central");
    console.log(listadoMenu);
}
var holaMundo = "hola mundo";

function alertHola() {
    alert(holaMundo);
}

function holaConsola() {
    console.log(holaMundo);
}

function concatenarString(palabra) {
    let concatenar = palabra + "hola";
    console.log(concatenar);
}


//Resolvente de ecuaciones cuadráticas -----------------------------------------------------------------------------------------------------------------------------------

function raicesCuadraticas(a, b, c) {
    // se reciben los coeficientes de una ecuacion cuadrática estilo ax²+bx+c.
    if (a == 0) {
        console.log("No es una funcion cuadrática"); //imprimo esto en pantalla si el termino cuadrático es cero.
        return "fin";
    }
    let radicando = alCuadrado(b) - 4 * a * c; //guardo en una variable el valor del radicando de la raiz de la formula resolvente.
    if (radicando == 0) {
        // si el radicando es cero, solo tiene una raiz.
        console.log("Tiene una sola raiz. X:" + (-b / (2 * a)).toFixed(2)); //se trunca el resultado con toFixed a 2 decimales (en este y todos los demas resultados)
        return "fin";
    }
    let complejo = verificaciónComplejo(radicando); // guardo en una variable la verificación de si es o no un número complejo.
    if (complejo == 0) {
        //si no es complejo, se resuelve e imprime tal cual.
        mostrarRaizReal(a, b, radicando);

    } else if (complejo == 1) {
        // si es compleja, a continuación se analizan e imprimen por separado parte real e imaginaria para una representación en forma binomica del número complejo.
        mostrarComplejo(a, b, radicando);

    }
}

function raizCuadrada(radicando) {
    //una funcion innecesaria para probar llamar a una función externa desde otra función. En este caso se saca la raiz cuadrada de un número y se retorna el resultado.
    let raizCuadrada = Math.sqrt(radicando);
    return raizCuadrada;
}

function alCuadrado(base) {
    // otra funcion para probar llamarla desde otra función, en este caso el resultado de elevar al cuadrado a un número que llega a la función.
    let resultado = Math.pow(base, 2);
    return resultado;
}

function verificaciónComplejo(radicando) {
    // se verifica con el valor del radicando, si tiene raices complejas o no.
    if (radicando > 0) {
        return 0; //en caso de no ser compleja, se retorna 0.
    } else if (radicando < 0) {
        return 1; //en caso de ser complejo, se retorna 1.
    }
}

function mostrarComplejo(a, b, radicando) {
    let raizX1Por2Real = -b;
    let raizX1Por2Imaginaria = raizCuadrada(radicando * -1);
    let raizX2Por2Real = -b;
    let raizX2Por2Imaginaria = -1 * raizCuadrada(radicando * -1);
    let raizX1Real = raizX1Por2Real / (2 * a);
    let raizX2Real = raizX2Por2Real / (2 * a);
    let raizX1I = raizX1Por2Imaginaria / (2 * a);
    let raizX2I = raizX2Por2Imaginaria / (2 * a);
    console.log(
        "X1: " + raizX1Real.toFixed(2) + " + " + raizX1I.toFixed(2) + "i"
    );
    console.log(
        "X2: " + raizX2Real.toFixed(2) + " + " + raizX2I.toFixed(2) + "i"
    );

}

function mostrarRaizReal(a, b, radicando) {
    let raizX1Por2 = -b + raizCuadrada(radicando);
    let raizX2Por2 = -b - raizCuadrada(radicando);
    let raizX1 = raizX1Por2 / (2 * a);
    let raizX2 = raizX2Por2 / (2 * a);
    console.log("X1: " + raizX1.toFixed(2));
    console.log("X2: " + raizX2.toFixed(2));

}
// termina la resolvente de ecuaciones cuadráticas---------------------------------------------------------------------------------------------------------------------------

//function botonDivertido() {
//  let elemento = document.getElementById("botonPrimario");
//console.log(elemento);
//elemento.addEventListener("click", function() {
//    alert("Agustin Escobar");
//});
//}
//botonDivertido();

function escribir() {
    console.log("chau");
}
// A continuación se usan constantes para resolver lo pedido, en este caso para calculos sencillos.

const pi = 3.14; // constante


function calculoAreaCirculo(radio) {
    let area = pi * alCuadrado(radio);
    console.log("El área es: " + area);

}

const contar = 10; //constante 

function contarHasta10() {
    let i = 0;
    for (i = 0; i < contar + 1; i++) {
        console.log(i);

    }
}
//contarHasta10();

const historia = "Cuando fray Bartolomé Arrazola se sintió perdido aceptó que ya nada podría salvarlo. La selva poderosa de Guatemala lo había apresado, implacable y definitiva. Ante su ignorancia topográfica se sentó con tranquilidad a esperar la muerte. Quiso morir allí, sin ninguna esperanza, aislado, con el pensamiento fijo en la España distante, particularmente en el convento de los Abrojos, donde Carlos Quinto condescendiera una vez a bajar de su eminencia para decirle que confiaba en el celo religioso de su labor redentora. Al despertar se encontró rodeado por un grupo de indígenas de rostro impasible que se disponían a sacrificarlo ante un altar, un altar que a Bartolomé le pareció como el lecho en que descansaría, al fin, de sus temores, de su destino, de sí mismo. Tres años en el país le habían conferido un mediano dominio de las lenguas nativas. Intentó algo. Dijo algunas palabras que fueron comprendidas. Entonces floreció en él una idea que tuvo por digna de su talento y de su cultura universal y de su arduo conocimiento de Aristóteles. Recordó que para ese día se esperaba un eclipse total de sol. Y dispuso, en lo más íntimo, valerse de aquel conocimiento para engañar a sus opresores y salvar la vida. –Si me matáis –les dijo– puedo hacer que el sol se oscurezca en su altura. Los indígenas lo miraron fijamente y Bartolomé sorprendió la incredulidad en sus ojos. Vio que se produjo un pequeño consejo, y esperó confiado, no sin cierto desdén. Dos horas después el corazón de fray Bartolomé Arrazola chorreaba su sangre vehemente sobre la piedra de los sacrificios (brillante bajo la opaca luz de un sol eclipsado), mientras uno de los indígenas recitaba sin ninguna inflexión de voz, sin prisa, una por una, las infinitas fechas en que se producirían eclipses solares y lunares, que los astrónomos de la comunidad maya habían previsto y anotado en sus códices sin la valiosa ayuda de Aristóteles.";
// constante string
function cuentaHistoria() {
    console.log(historia);
}

function agrandarEspacio(espacios) { // pone una cantidad de espacios entre dos caracteres equivalente al parametro que le llega a al función.
    let i;
    let caracter = "a";
    for (i = 0; i < espacios; i++) {
        caracter = caracter + " ";

    }
    caracter = caracter + "b";
    console.log(caracter);
}

function imprimirDibujo() { //imprime un dibujo hecho en ascii.
    console.log("'Y888888bo.._______:_____:_______..od888888Y'");
    console.log(" __8888888888b..____:____:____.d8888888888");
    console.log(" __88888Y'__`Y8b.____`__´___.d8Y'__`Y88888");
    console.log(" _Y88888__.db.__.Yb.__'..'__.dY.__.db.__8888Y");
    console.log(" ___`888__Y88Y____¨b_()_d¨___Y88Y__888´");
    console.log(" ____888b___' ________(.)_______'__.d888");
    console.log(" ___Y888888bd8g.'__.....':'.....__'.g8bd888888Y");
    console.log(" _______'Y'___.8.___....d()b....___.8.___'Y'");
    console.log("________.!__.8'_.db_.d..':'..b._db._'8.__!.");
    console.log(" __________d88__'__.8_(.)_8.__'__88b");
    console.log(" ________d888b__.g8._.()._.8g.__d888b");
    console.log(" _______:888888888Y'______'Y888888888:");
    console.log(" _______'!_8888888´________`8888888_!'");
    console.log(" _________'8Y__`'Y__________Y'´__Y8'");
    console.log(" ________'Y_______________________Y'");
    console.log("  ________!________________________!_");

}
let palabra;
traerUltimasNoticias(mostrarEnCarrusel);


function traerUltimasNoticias(callback) {
    let url = "http://127.0.0.1:3000/api/noticia";
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let noticias = JSON.parse(this.responseText);
            callback(noticias);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function mostrarEnCarrusel(noticias) {

    for (let i = 1; i <= 3; i++) {
        if (i == 1) {

            document.getElementById("carrusel").innerHTML = `<div class="carousel-item active h-50" >
            <img src="${noticias[noticias.length-i].imagenes[0]}" class="d-block w-100 h-50" id="carousel-image" alt="...">
            <div class="carousel-caption  d-md-block fondo-fuente-carrusel rounded" id="carousel-description">
                    <h5 id="title-description-carousel">${noticias[noticias.length-i].titulo}</h5>
                    <p id="subtitle-description-carousel">${noticias[noticias.length-i].subtitulo}</p>
                </div>
            </div>`;

        } else {
            document.getElementById("carrusel").innerHTML += `<div class="carousel-item w-100 h-50" >
        <img src="${noticias[noticias.length-i].imagenes[0]}" class="d-block w-100 h-50"  id="carousel-image" alt="...">
        <div class="carousel-caption d-md-block fondo-fuente-carrusel rounded" id="carousel-description" >
                    <h5 id="title-description-carousel">${noticias[noticias.length-i].titulo}</h5>
                    <p id="subtitle-description-carousel">${noticias[noticias.length-i].subtitulo}</p>
                </div>

        </div>`;
        }


    };
}
traerUltimosAportes(mostrarCartas);

function traerUltimosAportes(callback) {
    let url = "http://127.0.0.1:3000/api/aportes";
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let aportes = JSON.parse(this.responseText);
            callback(aportes);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function mostrarCartas(aportes) {
    for (let i = 0; i < 4; i++) {
        document.getElementById("carts-collage").innerHTML += `<div class="col-lg-3 col-md-6 d-flex separar mt-3">
            <div class="mx-auto d-flex id="single-card">
                <div class="card"  style="width: 18rem;">
                    <img src="${aportes[i].imagenAporte}" class="card-img-top" alt="..." style="object-fit:cover !important;" >
                    <div class="card-body" >
                        <h5 class="card-title">${aportes[i].nombre}</h5>
                        <p class="card-text">Materia:${aportes[i].aporteMateria}</p>
                        <a href="${aportes[i].fuente}" target=_blank class="btn btn-primary">Ver</a>
                    </div>
                </div>
            </div>
        </div>`
    }

}








//git config --global user.email "agustinescobaring@gmail.com";
//git config --global user.name "Agustin Escobar";