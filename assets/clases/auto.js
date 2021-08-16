class Auto {
    constructor(dominio, nombreTitular, apellidoTitular, dniTitular) {
        this.dominio = dominio;
        this.nombreTitular = nombreTitular;
        this.apellidoTitular = apellidoTitular;
        this.dniTitular = dniTitular;
    }
    getDominio() {
        return this.dominio;
    }
    getTitular() {
        return (`${this.nombreTitular} ${this.apellidoTitular}`);
    }
    getDni() {
        return this.dniTitular;
    }
    setDominio(nuevoDominio) {
        this.dominio = nuevoDominio;
    }
    setNombretitular(nuevoNombre) {
        this.nombreTitular = nuevoNombre;
    }
    setApellidoTitular(nuevoApellido) {
        this.apellidoTitular = nuevoApellido;
    }
    setDni(nuevoDni) {
        this.dniTitular = nuevoDni;
    }
}
let auto1 = new Auto('ACX189', 'Roberto', 'Bolaños', 22515698);
let auto2 = new Auto('FDK807', 'Carmen', 'Lallana', 35698759);