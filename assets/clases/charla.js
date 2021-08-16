class Charla {
    constructor(nombreCharla, fechaCharla, temaCharla, carreraCharla, autorCharla) {
        this.nombreCharla = nombreCharla;
        this.fechaCharla = fechaCharla;
        this.temaCharla = temaCharla;
        this.carreraCharla = carreraCharla;
        this.autorCharla = autorCharla;
    }
}
let charla1 = new Charla('Charla Coyuntura Economica actual', 20082021, 'Economia', 'Economia', 'Francisco Pellazo');
let charla2 = new Charla('Internet de las Cosas', 14092021, 'IoT', 'Ingenieria', 'Gabriel Venturino');
let charla3 = new Charla('Revolucion Cultural', 30102021, 'Analisis social y cultural de la Argentina', 'Trabajo Social', 'Esteban Rojas');
export default Charla;