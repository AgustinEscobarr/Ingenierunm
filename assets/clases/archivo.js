class Archivo {
    constructor(nombreArchivo, materiaArchivo, carreraArchivo, fuenteArchivo, autorArchivo) {
        this.nombreArchivo = nombreArchivo;
        this.materiaArchivo = materiaArchivo;
        this.carreraArchivo = carreraArchivo;
        this.fuenteArchivo = fuenteArchivo;
        this.autorArchivo = autorArchivo;
    }
}
let archivo1 = new Archivo('Codigo Gray', 'Tecnicas Digitales 1', 'Ingenieria', 'https://mena.com.mx/gonzalo/maestria/algor/CodigoBinarioGray.pdf', 'Gaston Castañeda');
let archivo2 = new Archivo('El capital - Marx', 'Introduccion al Zurdaje', 'Trabajo Social', 'http://biblio3.url.edu.gt/Libros/CAPTOM1.pdf', 'Juan Vazquez');
let archivo3 = new Archivo('Tabla de valores de resistencias', 'Teoria de los circuitos 1', 'Ingenieria', 'https://www.logicbus.com.mx/blog/wp-content/uploads/2019/07/codigo-colores-resistencias-e1563802288271.jpg', 'Hernan Quiroga');
export default Archivo;