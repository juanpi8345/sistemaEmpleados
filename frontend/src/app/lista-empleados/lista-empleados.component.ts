import { Component } from '@angular/core';
import { Empleado } from '../empleado';
import { EmpleadoService } from '../empleado.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-lista-empleados',
  templateUrl: './lista-empleados.component.html',
  styleUrls: ['./lista-empleados.component.css']
})
export class ListaEmpleadosComponent {

  empleados:Empleado[];

  constructor(private service:EmpleadoService, private router:Router){}

  ngOnInit():void{
    this.obtenerEmpleados();
  }

  private obtenerEmpleados(){
    this.service.obtenerEmpleados().subscribe(data=>{
      this.empleados = data;
    });
  }

  actualizarEmpleado(id:number){
    this.router.navigate(['editar-empleado/'+id]);
  }

  // eliminarEmpleado(id:number){
  //   this.service.eliminarEmpleado(id).subscribe(data=>{
  //     this.obtenerEmpleados();
  //   });
  // }

  eliminarEmpleado(id:number){
    swal({
      title: '¿Estas seguro?',
      text: "Confirma si deseas eliminar al empleado",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si , elimínalo',
      cancelButtonText: 'No, cancelar',
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true
    }).then((result) => {
      if(result.value){
        this.service.eliminarEmpleado(id).subscribe(data => {
          this.obtenerEmpleados();
          swal(
            'Empleado eliminado',
            'El empleado ha sido eliminado con exito',
            'success'
          )
        })
      }
    })
  }

  verDetalles(id:number){
    this.router.navigate(["empleado-detalles",id]);
  }
}