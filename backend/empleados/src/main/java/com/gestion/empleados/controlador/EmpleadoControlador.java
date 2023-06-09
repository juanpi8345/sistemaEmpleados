package com.gestion.empleados.controlador;

import com.gestion.empleados.excepciones.ResourceNotFoundException;
import com.gestion.empleados.modelo.Empleado;
import com.gestion.empleados.repositorio.EmpleadoRepositorio;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/v1/")
@CrossOrigin(origins = "http://localhost:4200")
public class EmpleadoControlador {
    
    @Autowired
    private EmpleadoRepositorio repositorio;
   
    
    @GetMapping("/empleados")
    public List<Empleado> listarTodosLosEmpleados(){
        return repositorio.findAll();
    }
    
    @PostMapping("/empleados")
    public Empleado guardarEmpleado(@RequestBody Empleado empleado){
        return repositorio.save(empleado);
    }
    
    @GetMapping("/empleados/{id}")
    public ResponseEntity<Empleado> obtenerEmpleadoPorId(@PathVariable Long id){
        Empleado empleado = repositorio.findById(id)
                 .orElseThrow(()->new ResourceNotFoundException("No existe el empleado con el id: "+id));
         return ResponseEntity.ok(empleado);
    }
    
    @PutMapping("/empleados/{id}")
     public ResponseEntity<Empleado> actualizarEmpleado(@PathVariable Long id, @RequestBody Empleado emp){
        Empleado empleado = repositorio.findById(id)
                 .orElseThrow(()->new ResourceNotFoundException("No existe el empleado con el id: "+id));
        
        empleado.setNombre(emp.getNombre());
        empleado.setApellido(emp.getApellido());
        empleado.setEmail(emp.getEmail());
        
       repositorio.save(empleado);
        
         return ResponseEntity.ok(empleado);
    }
     
     @DeleteMapping("/empleados/{id}")
     public void eliminarEmpleado(@PathVariable Long id){
         repositorio.deleteById(id);
     }
}
