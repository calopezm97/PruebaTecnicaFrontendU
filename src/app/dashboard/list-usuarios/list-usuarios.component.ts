import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { UsuarioService } from "../../services/usuario.service";
import { MensajeConfirmacionComponent } from '../shared/mensaje-confirmacion/mensaje-confirmacion.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

export class ListadoUsuariosComponent {
  displayedColumns: string[] = ['documentType', 'document', 'firstName', 'lastName', 'email', 'country', 'area', 'addmissionDate', 'createdAt', 'updateAt', 'actions'];
  listUsuarios: any[] = [];
  dataSource = new MatTableDataSource(this.listUsuarios);
  
  constructor(private usuariosService: UsuarioService, public dialog: MatDialog,
    public snackBar: MatSnackBar) {
      this.getUsuarios();
    }

  /**
   * recupera todos los
   */
  getUsuarios(): void {    
      this.usuariosService.readAll().subscribe(data =>{
      this.listUsuarios = data;      
      this.dataSource = new MatTableDataSource(this.listUsuarios);
    })
  }

  /**
   * Eliminacion del empleado
   * @param index id con el que se eliminara el empleado
   */
  eliminarEmpleado(index: number){
    const dialogRef = this.dialog.open(MensajeConfirmacionComponent, {
      width: '350px',
      data: {mensaje: 'Esta seguro que desea eliminar el Empleado?'}
          });
    
    dialogRef.afterClosed().subscribe(result => {
      if (result === 'aceptar') { 
        this.usuariosService.delete(index).subscribe((data)=>{
          if (data) {
            this.snackBar.open('El Empleado fue eliminado con exito!', '', {
              duration: 3000
            });
            this.getUsuarios();
          } else {
            this.snackBar.open('El Empleado No Existe!', '', {
              duration: 3000
            });
            this.getUsuarios();
          }
          
        });      
      }
      
    });
    
  }

  /**
   * Aplicacion del filtro para facilitar la busqueda de informacion
   * @param event 
   */
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
