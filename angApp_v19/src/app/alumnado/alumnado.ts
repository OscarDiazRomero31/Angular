export class Alumno{
    constructor(
        public nombre: string,
        public apellidos: string,
        public dni: string,
        public fechaNacimiento: string,
        public poblacion: string,
        public telefono: string,
        public curso: number,
        public modulos: string[]
    )   {}
}