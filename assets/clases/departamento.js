class Departamento {
    constructor(nombreDepartamento, carrerasDepartamento, internoDepartamento, correoDepartamento, edificioDepartamento) {
        this.nombreDepartamento = nombreDepartamento;
        this.carrerasDepartamento = carrerasDepartamento;
        this.internoDepartamento = internoDepartamento;
        this.correoDepartamento = correoDepartamento;
        this.edificioDepartamento = edificioDepartamento;

    }
    crearCarrera(nombreCarrera, orientacionCarrera, responsableCarrera, eMailCarrera, consejoCarrera) {
        let nuevaCarrera = new Carrera(nombreCarrera, orientacionCarrera, responsableCarrera, eMailCarrera, consejoCarrera)
        carrera.push(nuevaCarrera);
    }
}

let departamento1 = new Departamento('Ciencias aplicadas y tecnologia', 'Ingenieria', 25, 'dcayt@unm.com.ar', 'Edificio Historio 2do Piso');
let departamento2 = new Departamento('Economia y Administracion', 'Economia', 23, 'eya@unm.com.ar', 'Edificio Historico 1er Piso');
let departamento3 = new Departamento('Humanidades y Ciencias Sociales', 'Trabajo Social', 22, 'hycs@unm.com.ar', 'Edificio P planta baja');
export default Departamento;