class Aplicacion {
    constructor(appMateria, appCarrera, appNombre, appDescripcion, appEnlace) {
        this.appMateria = appMateria;
        this.appCarrera = appCarrera;
        this.appNombre = appNombre;
        this.appDescripcion = appDescripcion;
        this.appEnlace = appEnlace;

    }
}

let aplicacion1 = new Aplicacion('Algebra y geometria analitica', 'Ingenieria', 'Geogebra', 'Software para graficar funciones matematicas', 'https://www.geogebra.org/graphing?lang=es-AR');
let aplicacion2 = new Aplicacion('Teoria de los Circuitos 1', 'Ingenieria', 'Octave', 'Octave o GNU Octave es un programa y lenguaje de programación para realizar cálculos numéricos. Como su nombre indica, Octave es parte del proyecto GNU. Es considerado el equivalente libre de MATLAB', 'https://octave-online.net');
let aplicacion3 = new Aplicacion('all', 'all', 'Calculadora Cientifica', 'Calculadora cientifica online', 'https://web2.0calc.es');