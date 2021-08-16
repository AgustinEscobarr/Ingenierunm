class Profesor extends Persona {
    constructor(nombre, apellido, materiaProfesor, carrera, mail) {
        super(nombre, apellido, carrera, mail);
        this.materiaProfesor = materiaProfesor;
    }
    mostrarCantidadDeAulas() {
        let contar = 0;
        aula.map(cantidadDeAulas => {
            if (cantidadDeAulas.duenioDelAula == `${this.nombre} ${this.apellido}`) {
                contar++;
            }
        });
        return contar;
    }
    darCalificacion(estudiante, nota, comentarios, categoriaEvaluada) {
        let calificado = {
            materia: this.materiaProfesor,
            carreraMateria: this.carrera,
            nota: nota,
            comentarios: comentarios,
            categoriaEvaluada: categoriaEvaluada,
        };
        estudiante.calificaciones.push(calificado);
    }
    crearApunte() {

    }
}
let profesor1 = new Profesor('Gaston', 'Bidart', 'Algebra y Geometria analitica', 'Ingenieria', 'gastonbidart@gmail.com');
let profesor2 = new Profesor('Claudia', 'Fernandez', 'Quimica Organica', 'Biotecnologia', 'claufernandez34@hotmail.com');
let profesor3 = new Profesor('Horacio', 'Quiroga', 'Medios de comunicacion', 'Comunicacion Social', 'quirogahora111@gmail.com');