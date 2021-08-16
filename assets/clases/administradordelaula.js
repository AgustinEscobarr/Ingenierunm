class AdministradorDelAula {
    constructor(nombreCompletoDelProfesor, materia, carrera, cantidadDeAlumnos) {
        this.nombreCompletoDelProfesor = nombreCompletoDelProfesor;
        this.materia = materia;
        this.carrera = carrera;
        this.cantidadDeAlumnos = cantidadDeAlumnos;
    }
    armarAula(duracionDelAula) {
        let aulaCreada = new Aula(this.cantidadDeAlumnos, this.materia, duracionDelAula, `${this.nombreCompletoDelProfesor}`);
        aula.push(aulaCreada);
    }
    borrarAula() {
        aula.foreach(borrar => {
            if (this.duracionDelAula == 0) {
                borrar.splice()
            }
        })
    }

    crearAdminAula(profesor, cantidadDeAlumnos) {
        let admin = new AdministradorDelAula(`${profesor.nombreProfesor} ${profesor.apellidoProfesor}`, profesor.materiaProfesor, profesor.carreraProfesor, cantidadDeAlumnos);
        let largo = adminAula.length;
        adminAula[largo] = admin;
    }


}
let adminAula1 = new AdministradorDelAula(`${profesor1.nombreProfesor} ${profesor1.apellidoProfesor}`, profesor1.materiaProfesor, profesor1.carreraProfesor, 40);
let adminAula = [adminAula1];
export default AdministradorDelAula;