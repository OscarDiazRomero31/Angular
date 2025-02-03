import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadoComponent } from './empleado/empleado.component';
import { AlumnadoComponent } from "./alumnado/alumnado.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EmpleadoComponent, AlumnadoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Proyecto Angular';
}
