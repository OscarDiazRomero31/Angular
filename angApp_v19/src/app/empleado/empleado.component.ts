import { Component } from '@angular/core';
import { Empleado } from './empleado';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-empleado',
  imports: [CommonModule],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleadoExt:Empleado;
  public trabajador: Array<any>;
  public trabajadorExterno: boolean;
Empleado: any;

  constructor(){
    this.empleadoExt = new Empleado("Oscar",21);
    this.trabajador = [new Empleado("Angela",19),
      new Empleado("Jose",50),
      new Empleado("Nuria",44)]
    this.trabajadorExterno=true;
  }
  ngOnInit(){
    console.log(this.empleadoExt)
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }

}
