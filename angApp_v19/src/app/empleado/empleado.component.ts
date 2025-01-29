import { Component } from '@angular/core';
import { Empleado } from './empleado';

@Component({
  selector: 'app-empleado',
  imports: [],
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css'
})
export class EmpleadoComponent {
  public title = "Bienvenido Empleado";
  public empleadoExt:Empleado;
  public trabajador: Array<any>;
  public trabajadorExterno: boolean;

  constructor(){
    this.empleadoExt = new Empleado("Oscar",21,"Trabajador",true);
    this.trabajador = [new Empleado("Angela",19,"Trabajador",true),
      new Empleado("Jose",50,"Jefe",true),
      new Empleado("Nuria",44,"Trabajador",true)]
    this.trabajadorExterno=true;
  }
  ngOnInit(){
    console.log(this.empleadoExt)
  }

  cambiarExterno(valor:boolean){
    this.trabajadorExterno = valor;
  }

}
