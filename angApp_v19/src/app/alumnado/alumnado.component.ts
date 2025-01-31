import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Alumno } from './alumnado';

@Component({
  selector: 'app-alumnado',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './alumnado.component.html',
  styleUrl: './alumnado.component.css'
})
export class AlumnadoComponent {
  alumnado: Alumno[] = [
    new Alumno("Juan", "Pérez Gómez", "12345678A", "2003-06-15", "Madrid", "612345678", 1, ["Programación", "Bases de Datos", "Entornos"]),
    new Alumno("María", "López Fernández", "87654321B", "2002-09-20", "Barcelona", "698765432", 2, ["Despliegue", "Desarrollo Web", "Seguridad"]),
    new Alumno("Pedro", "García Ruiz", "11223344C", "2004-04-10", "Sevilla", "677123456", 1, ["Sistemas Informáticos", "Redes", "Bases de Datos"]),
    new Alumno("Laura", "Martínez Sánchez", "99887766D", "2001-12-01", "Valencia", "699112233", 2, ["Desarrollo Web", "Interfaces", "Programación Avanzada"])
  ];

  alumnadoFiltrado: Alumno[] = [];

  cargarAlumnado(curso: number) {
    this.alumnadoFiltrado = this.alumnado.filter(alumno => alumno.curso === curso);
  }
}
