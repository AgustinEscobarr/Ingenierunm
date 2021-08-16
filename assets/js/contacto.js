traerContactos(mostrarContactos);

function traerContactos(callback) {
    let url = "http://127.0.0.1:3000/api/contactos";
    let xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            let contactos = JSON.parse(this.responseText);
            callback(contactos);
        }

    };
    xhttp.open("GET", url, true);
    xhttp.send();

}

function mostrarContactos(contactos) {
    contactos.forEach(elemento => {

        document.getElementById("card-contactos").innerHTML += `<div class="col">
        <div class="card mb-4 rounded-3 shadow-sm h-100">
            <div class="card-header py-3">
                <h4 class="my-0 fw-normal">${elemento.titulo}</h4>
            </div>
            <div class="card-body">
                
                <div class="mt-3 mx-auto mb-4" style="width= 350px !important; heigth= 150px !important;  ">
                    <img class="w-75" src="${elemento.imagen}" alt="" style="object-fit: cover !important; ">
                </div>
                <a href="${elemento.link}" class="non-decoration" target=_blank><button type="button" class="w-100 btn btn-lg btn-primary">Ir</button></a>
            </div>
        </div>
    </div>`;

    });

}