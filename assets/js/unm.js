traerUNM(mostrarUNM);

function traerUNM(callback) {
    let url = "http://127.0.0.1:3000/api/unm";
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let unm = JSON.parse(this.responseText);
            callback(unm);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function mostrarUNM(unm) {
    unm.forEach((elemento) => {
        document.getElementById("unm-links").innerHTML += `<div class="col-lg-4 ">
            <img src="${elemento.imagen}" class="bd-placeholder-img rounded-circle" width="140 " height="140 "  role="img " aria-label="Placeholder: 140x140 " preserveAspectRatio="xMidYMid slice " focusable="false" style="object-position:cover;><title>Placeholder</title><rect width="100% " height="100% " fill="#777 "></rect><text x="50% " y="50% " fill="#777 " dy=".3em " v"></text>
            <h2>${elemento.titulo}</h2>
            <p>${elemento.descripcion}</p>
            <p><a class="btn btn-secondary " href="${elemento.link}" target=_blank>Ir»</a></p>
        </div>`

    })

}