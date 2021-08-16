var usuario;
firebase.auth().onAuthStateChanged((user) => {
    if (user) {
        usuario = user;
        document.getElementById("navbarDropdown").innerHTML = `<img src="${user.photoURL}" class="img-fluid rounded-circle avatar me-2"><span class="color-text" id="nombre-usuario">${user.displayName}</span>`
        document.getElementById("item-signin").innerHTML += `<button class="btn btn-secondary bg-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
       Acciones de usuario
     </button>
     <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
         <li><a class="dropdown-item" href="../html/nuevanoticia.html">Crear Noticia</a></li>
         <li><a class="dropdown-item" href="../html/nuevoaporte.html">Crear Aporte</a></li>
         <li><a class="dropdown-item" href="#">Something else here</a></li>
     </ul>`;
        document.getElementById("nav-dropdown-watch").innerHTML = `<li id="sign-in-watch"><a class="dropdown-item" href="#">Mi perfil</a></li>
     
         <hr class="dropdown-divider">
     </li>
     <li><button id="sign-out" type="button" class="btn">Cerrar Sesion</button></li>`;

        let buttonOut = document.getElementById("sign-out");
        buttonOut.addEventListener("click", cerrarSesion, false);

    } else {
        document.getElementById("content").innerHTML = "";
        document.getElementById("navbarDropdown").innerHTML = `<img src="https://incresc.com/images/incresc/fondo_sin_imagen_perfil_usuario.png" class="img-fluid rounded-circle avatar me-2"><span class="color-text">Perfil</span>`;
        document.getElementById("item-signin").innerHTML = ``;
        document.getElementById("nav-dropdown-watch").innerHTML = `<li id="sign-in-watch"><button id="sign-in" type="button" class="btn">Iniciar Sesion</button></li>
        <li id="sign-up-watch"><a class="dropdown-item" href="../html/registro.html">Registrarse</a></li>
        <li>
            <hr class="dropdown-divider">
        </li>
        <li><a class="dropdown-item" href="#">Universo Paralelo</a></li>`;


    }
});

function cerrarSesion() {
    firebase.auth().signOut().then(() => {
        // Sign-out successful.
    }).catch((error) => {
        // An error happened.
    });
}
var provider = new firebase.auth.GoogleAuthProvider();



function registrarUsuario() {
    firebase.auth()
        .signInWithPopup(provider)
        .then((result) => {
            /** @type {firebase.auth.OAuthCredential} */
            var credential = result.credential;

            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = credential.accessToken;
            // The signed-in user info.
            var user = result.user;


            observarUsuario();
            // ...
        }).catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
        });

}





let botonEnviar = document.getElementById("enviar-noticia");
botonEnviar.addEventListener("click", enviarNoticia);


function enviarNoticia() {
    let titulo = document.getElementById("titulo-noticia");
    let subtitulo = document.getElementById("subtitulo-noticia");
    let cuerpo = document.getElementById("cuerpo-noticia");
    let imagenes = document.getElementById("imagenes-noticia");


    let hoy = new Date();
    let fecha = `${hoy.getDate()}/${( hoy.getMonth() + 1 )}/${hoy.getFullYear()}`;

    titulo = titulo.value;
    console.log(titulo)
    subtitulo = subtitulo.value;
    console.log(subtitulo);
    cuerpo = cuerpo.value;
    console.log(cuerpo);
    imagenes = imagenes.value;
    console.log(imagenes);
    if (titulo && subtitulo && cuerpo && imagenes) {
        let estructuraJson = `{
            "titulo": "${titulo}",
            "subtitulo": "${subtitulo}",
            "cuerpo": "${cuerpo}",
            "fecha": "${fecha}",
            "imagenes": [${imagenes}],
            "epigrafes": [],
            "autores": ["${usuario.displayName}"],
            "categorias": []
        }`;
        console.log(estructuraJson);

        let url = "http://127.0.0.1:3000/api/noticia";

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