let botonEnviar = document.getElementById("enviar-aporte");
botonEnviar.addEventListener("click", enviarNoticia)

function enviarNoticia() {
    let titulo = document.getElementById("titulo-aporte");
    let materia = document.getElementById("materia-aporte");
    let imagen = document.getElementById("imagen-aporte");
    let link = document.getElementById("link-aporte");



    titulo = titulo.value;
    console.log(titulo)
    materia = materia.value;
    console.log(materia);
    imagen = imagen.value;
    console.log(imagen);
    link = link.value;
    console.log(imagen);
    if (titulo && materia && imagen && link) {
        let estructuraJson = `[{
            "nombre": "${titulo}",
            "aporteMateria": "${materia}",
            "fuente": "${link}",
            "fechaAporte": "",
            "imagenAporte": "${imagen}"
    
        }]`;
        console.log(estructuraJson);

        let url = "http://127.0.0.1:3000/api/aportes";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", url);

        xhr.setRequestHeader("Accept", "application/json");
        xhr.setRequestHeader("Content-Type", "application/json");

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4) {
                console.log(xhr.status);
                console.log(xhr.responseText);
            }
        };



        xhr.send(estructuraJson);
        alert("Se envio satisfactoriamente papu");
        location.reload();

    } else {
        alert("Te faltó rellenar un campo");
    }

}