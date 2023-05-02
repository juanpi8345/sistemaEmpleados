import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { ActivatedRoute } from '@angular/router';
import { EmpleadoService } from '../empleado.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-empleado-detalles',
  templateUrl: './empleado-detalles.component.html',
  styleUrls: ['./empleado-detalles.component.css']
})
export class EmpleadoDetallesComponent {

  id:number;
  empleado:Empleado;

  constructor(private route:ActivatedRoute, private service:EmpleadoService){}

  ngOnInit():void{
    this.id = this.route.snapshot.params['id'];
    this.empleado = new Empleado();
    this.service.obtenerEmpleado(this.id).subscribe(data=>{
      this.empleado = data;
      swal("Detalles del empleado: "+this.empleado.nombre);
    })
  }

}
