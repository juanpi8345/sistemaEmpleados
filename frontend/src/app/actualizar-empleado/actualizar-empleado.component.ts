import { Component } from '@angular/core';
import { EmpleadoService } from '../empleado.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Empleado } from '../empleado';
import swal from 'sweetalert2';

@Component({
  selector: 'app-actualizar-empleado',
  templateUrl: './actualizar-empleado.component.html',
  styleUrls: ['./actualizar-empleado.component.css']
})
export class ActualizarEmpleadoComponent {

  empleado :Empleado = new Empleado();
  id:number
  constructor(private service:EmpleadoService, private route:ActivatedRoute, private router:Router){}


  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.service.obtenerEmpleado(this.id).subscribe(data=>{
      this.empleado = data;
    })
  }

  actualizarEmpleado(id:number){
    this.service.actualizarEmpleado(id,this.empleado).subscribe(data=>{
      swal("Empleado actualizado con exito");
      this.router.navigate(['empleados']);
    })
  }

}
