class Noticia {
    constructor(titulo, cuerpo, fecha, subtitulo, categorias, autores, imagenes, epigrafes) {
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.fecha = fecha;
        this.subtitulo = subtitulo;
        this.categorias = categorias;
        this.autores = autores;
        this.imagenes = imagenes;
        this.epigrafes = epigrafes;
    }

}

let noticia1 = new Noticia('Nuevas Tecnologias', 28042021, 'Ingenieria', 'Tecnologia', 'Fabian Gomez');
let noticia2 = new Noticia('Coyuntura Economica', 22032021, 'Economia', 'Economia', 'Hernan Quiroga');
let noticia3 = new Noticia('Nuevas medidas del gobierno', 21052021, 'all', 'Direccion de Bienestar Universitario');
export default Noticia;