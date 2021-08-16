class Apunte {
    constructor(nombreApunte, apunteMateria, fuente, apunteCarrera, añoApunte) {
        this.nombreApunte = nombreApunte;
        this.apunteMateria = apunteMateria;
        this.fuente = fuente;
        this.apunteCarrera = apunteCarrera;
        this.añoApunte = añoApunte;
    }
}
let apunte1 = new Apunte('Electromagnetismo', 'Fisica 2', 'Hernan Giufrida', 'Ingenieria', 2018);
let apunte2 = new Apunte('Metodo Socrático', 'Filosofia', 'Aldana Fernandez', 'Comunicacion Social', 2019);
let apunte3 = new Apunte('Ejemplos de quimica inorganica', 'Quimica general', 'Ester Schneider', 'Ingenieria', 2016);
export default Apunte;