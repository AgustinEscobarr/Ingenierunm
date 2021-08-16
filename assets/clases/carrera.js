class Carrera {
    constructor(nombreCarrera, orientacionCarrera, responsableCarrera, eMailCarrera, consejoCarrera) {
        this.nombreCarrera = nombreCarrera;
        this.orientacionCarrera = orientacionCarrera;
        this.responsableCarrera = responsableCarrera;
        this.eMailCarrera = eMailCarrera;
        this.consejoCarrera = consejoCarrera;
    }
}

let carrera1 = new Carrera('Ingenieria en Electronica', 'Aplicaciones Agropecuarias', 'Gabriel Venturino', 'aca iria el mail del representante', 'aca iria una redireccion a la pagina del Consejo');
let carrera2 = new Carrera('Comunicacion Social', 'Cientifica', 'Franco Potalkov', 'aca iria el mail del representante', 'aca iria una redireccion a la pagina del Consejo');
let carrera3 = new Carrera('Ingenieria en Electronica', 'Redes', 'Gabriel Venturino', 'aca iria el mail del representante', 'aca iria una redireccion a la pagina del Consejo');
let carrera = [carrera1, carrera2, carrera3];
export default Carrera;