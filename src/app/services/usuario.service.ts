import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  /**
   * url raiz
   */
   baseURL = 'http://localhost:8089/usuarios';


   constructor(private http: HttpClient) { }
 
   /**
    * Sustraccion de los empleados, (Todos)
    * @returns todos los empleados
    */
   readAll(): Observable<any> {
     return this.http.get(this.baseURL);
   }
 
   /**
    * Sustraccion de solo un empleado por Id
    * @param id el empleado que vamos a traer
    * @returns empleado
    */
   read(id: number): Observable<any>{
     return this.http.get(this.baseURL+'/'+id);
   }
 
   /**
    * Creacion de un empleado
    * @param data objeto Empleado
    * @returns true o falso si se creo o no
    */
   create(data: Usuario) {
     return this.http.post(this.baseURL,data)
   }
 
   /**
    * Actualizacion de datos
    * @param id del empleado a actualizar
    * @param data Objeto empleado a actualizar
    * @returns True o False segun se halla finalizado la accion
    */
   update(id: number, data: Usuario) {
     return this.http.put(this.baseURL+id,data)
   }
 
   /**
    * Metodo de eliminacion
    * @param id del empleado a eliminar
    * @returns true o false si se puedo efectuar
    */
   delete(id: number) {
     return this.http.delete(this.baseURL+id)
   }
}
