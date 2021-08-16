class Curso {
    constructor(nombreCurso, tagsCurso, enlaceCurso, profesorCurso, carreraCurso) {
        this.nombreCurso = nombreCurso;
        this.tagsCurso = tagsCurso;
        this.enlaceCurso = enlaceCurso;
        this.profesorCurso = profesorCurso;
        this.carreraCurso = carreraCurso;
    }
}
let curso1 = new Curso('LaTex', 'procesador de texto', 'https://youtube.com/playlist?list=PLKRmVEXGjGWc3IIKmo_0F1gxyNggVzdsI', 'Gerardo Chavez', 'all');
export default Curso;