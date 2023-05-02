import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Empleado } from './empleado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {

  //Obtiene empleados en el backend
  private baseUrl = "http://localhost:8080/api/v1/empleados";


  constructor(private http:HttpClient) { }

  obtenerEmpleados():Observable<Empleado[]>{
    return this.http.get<Empleado[]>(this.baseUrl);
  }

  registrarEmpleado(empleado:Empleado):Observable<any>{
    return this.http.post(this.baseUrl, empleado);
  }

  obtenerEmpleado(id:number):Observable<any>{
    return this.http.get(this.baseUrl + "/"+id)
  }

  eliminarEmpleado(id:number):Observable<any>{
    return this.http.delete(this.baseUrl+ "/"+id);
  }

  actualizarEmpleado(id:number, empleado:Empleado):Observable<any>{
    return this.http.put(this.baseUrl+ "/"+id, empleado);
  }
}
