class Persona {
    constructor (nombre, apellido, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    cumplirAnios (){
        this.edad = edad +1 ;
    }
}

class Alumno extends Persona{
    constructor (nombre, apellido, edad, matricula, nota ) {
        super(nombre, apellido, edad);
        this.matricula = matricula;
        this.nota = nota;

    }
}
class Mentor extends Persona {
    constructor (nombre, apellido, edad, arrayAlumnos, arrayMaterias){
        super(nombre, apellido, edad);
        this.alumnos = arrayAlumnos;
        this.materias = arrayMaterias;
    }
}

class Materias {
    constructo (nombre, duracion) {
        this.nombre = nombre;
        this.duracion = duracion;
    }
}

class Agenda {
    constructor (arrayAlumnos, arrayMentores){
        this.alumos = arrayAlumnos;
        this.mentores = arrayMentores;
    }
}