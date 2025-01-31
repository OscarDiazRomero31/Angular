import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoComponent } from "./alumnado/alumnado.component";

@Component({
  selector: 'app-root', // Cambiar a 'app-root'
  standalone: true,
  imports: [CommonModule, RouterOutlet, EmpleadoComponent, AlumnadoComponent], // Unir en una sola lista
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Angular';
}
