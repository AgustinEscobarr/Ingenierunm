export class Enlace {
    constructor(materiaEnlace, carreraEnlace, fuenteEnlace, nombreEnlace, servidorEnlace) {
        this.materiaEnlace = materiaEnlace;
        this.carreraEnlace = carreraEnlace;
        this.fuenteEnlace = fuenteEnlace;
        this.nombreEnlace = nombreEnlace;
        this.servidorEnlace = servidorEnlace;
    }
}
let enlace1 = new Enlace('Fisica 2', 'Ingenieria', 'https://youtube.com/playlist?list=PLgeh_RfSoZhK6FbqP33mXtI7gV2zvhGne', 'Fisica', 'Carga Electrica y Campo Electrico', 'Youtube');
let enlace2 = new Enlace('Quimica Organica', 'Biotecnologia', 'https://youtube.com/playlist?list=PLlRLQaWvQm6Zk63seSYCg_vEfp4SNfZcT', 'Nomenclatura Quimica Organica', 'Youtube');
let enlace3 = new Enlace('Quimica General', 'Ingenieria', 'https://youtube.com/playlist?list=PLOa7j0qx0jgN5IrtsSbET8LvwOP4AuvZs', 'Quimica Inorganica', 'Youtube');