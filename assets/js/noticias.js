traerNoticias(mostrarNoticias);

function traerNoticias(callback) {
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

function mostrarNoticias(noticias) {


    noticias.forEach((elemento) => {
        document.getElementById("cards-noticias").innerHTML += `<div class="col">
        <div class="card shadow-sm">
            <img src="${elemento.imagenes[0]}" class="bd-placeholder-img card-img-top" width="100%" height="225"  role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/>

            <div class="card-body">
                <p class="card-text"><h5 class="text-center fw-bold">${elemento.titulo}</h5></p>
                <p class="card-text"><h6 class="text-center">${elemento.subtitulo}</h6></p>
                <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary" onclick=traerNoticia("${elemento._id}")>View</button>
                        <!--<button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>-->
                    </div>
                    <small class="text-muted">${elemento.fecha}</small>
                </div>
            </div>
        </div>
    </div>`
    });

}

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


    document.getElementById("content").innerHTML = `<div style="color:black;"> <section class="py-3 overflow-hidden">
        <div class="container w-100 overflow-hidden" >
            <div class="row">
                <div class="col-lg-9">
                    <h1 class="fw-bold mb-0 color-text"></h1>
                    <!--<p class="lead text-muted color-text">Mira las ultimas noticias</p>-->
                </div>
                <div class="col-lg-3 d-flex">

                </div>
            </div>
        </div>
    </section>
    <section>
        <div class="container overflow-hidden">
            <div class="p-4 mb-4 text-white rounded bg-image overflow-hidden position-relative d-inline-block mx-auto"   >
            <img src="${noticia.imagenes[0]}" class="" alt="..." style="object-fit:cover !important;" id="header-noticia">
                <div class="position-absolute" id="div-titulo-subtitulo" col-md-6 px-0">
                    <h1 class="display-4 fst-italic bg-dark ">${noticia.titulo}</h1>
                    <p class=" lead my-3 bg-dark">${noticia.subtitulo}</p>

                </div>
            </div>

            <div class="row mb-2">

            </div>

            <div class="row g-5">
                <div class="col-md-8">


                    <article class="">

                        <p class="blog-post-meta">${noticia.fecha} por <a href="#">${noticia.autores[0]}</a></p>

                        <p class="lead">${noticia.cuerpo}
                        </p>


                    </article>
               
                </div>
                <div class="col-md-4" id="imagenes-laterales">
                    

                </div>

            </div>
        </div>
    </section>
    </div>`;

    noticia.imagenes.forEach((elemento, index) => {
        if (index >= 1) {
            document.getElementById("imagenes-laterales").innerHTML += `<div class="border rounded overflow-hidden shadow-sm p-3 mb-3">

        <div class="d-flex">
            <a class="mx-auto" href="${elemento}" target=_blank> <img class="bd-placeholder-img mx-auto" width="300" height="250" src="${elemento}"
                    role="img"></a>

        </div>
        <div class="col p-1 d-flex flex-column position-static">
            <h6 class="text-center"> Imagen ${index}</h6>

        </div>
    </div>`;
        }
        console.log(elemento)
    });



}