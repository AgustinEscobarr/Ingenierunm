function traerNoticia(id) {
    let url = `http://127.0.0.1:3000/api/noticia/${id}`;
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let noticia = JSON.parse(this.responseText);
            mostrarNoticia(noticia);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function mostrarNoticia(noticia) {

    noticia.forEach((elemento) => {
        document.getElementById("cards-noticia").innerHTML += ``
    });

}