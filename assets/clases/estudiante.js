class Estudiante extends Persona {
    constructor(dni, nombre, apellido, carrera, mail, calificaciones = [], materiasAprobadas, materiasInscriptas) {
        super(nombre, apellido, carrera, mail);
        this.dni = dni;
        this.calificaciones = calificaciones;
        this.materiasAprobadas = materiasAprobadas;

    }
    verNotas() {
        this.calificaciones.forEach(notas => {
            console.log(`Materia:${notas.materia}
            Se evaluó:${notas.categoriaEvaluada}
            nota:${notas.nota}
            Comentario:${notas.comentarios}`);

        });
    }
    anotarseMateria() {

    }
    verMaterias() {

    }



}

export default Estudiante;