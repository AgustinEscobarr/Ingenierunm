class Materia {
    constructor(nombreMateria, materiaComision, correlatividad, materiaCarrera, tiempoMateria, apunteMateria) {
        this.nombreMateria = nombreMateria;
        this.materiaComision = materiaComision;
        this.correlatividad = correlatividad;
        this.materiaCarrera = materiaCarrera;
        this.tiempoMateria = tiempoMateria;
        this.apunteMateria = apunteMateria;
        console.log('inside constructor');
    }
}
let materia1 = new Materia('Analisis matemático 1', 02, '2015-2017', 'Ingenieria', 'anual');
let materia2 = new Materia('Introduccion al pensamiento cientifico', 04, '2146-3', 'Biotecnologia', 'cuatrimestral');
let materia3 = new Materia('Economia 1', 01, '2018-2', 'Economia', 'cuatrimestral');
let materia = [materia1, materia2, materia3];