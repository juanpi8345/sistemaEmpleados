import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';

const routes: Routes = [
  {path:'empleados',component:ListaEmpleadosComponent},
  {path:'',redirectTo:'empleados',pathMatch:'full'},
  {path:'registrar-empleado',component:RegistrarEmpleadoComponent},
  {path:'empleado-detalles/:id',component:EmpleadoDetallesComponent},
  {path:'editar-empleado/:id',component:ActualizarEmpleadoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
