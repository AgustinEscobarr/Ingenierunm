traerAportes(mostrarAportes);

function traerAportes(callback) {
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

function mostrarAportes(aportes) {

    for (let i = 0; i < 12; i++) {
        document.getElementById("cards-aportes").innerHTML += `<div class="col-lg-3 col-md-6 d-flex separar mt-3">
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