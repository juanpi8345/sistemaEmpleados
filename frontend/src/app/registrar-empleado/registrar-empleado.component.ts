import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-empleado',
  templateUrl: './registrar-empleado.component.html',
  styleUrls: ['./registrar-empleado.component.css']
})
export class RegistrarEmpleadoComponent {

  empleado:Empleado = new Empleado();

  constructor(private service:EmpleadoService, private router:Router){}

  guardarEmpleado(){
    this.service.registrarEmpleado(this.empleado).subscribe(data=>{
      this.router.navigate(['empleados']);
    });
  }



}
