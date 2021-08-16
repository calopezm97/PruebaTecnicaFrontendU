import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './dashboard/navbar/navbar.component';
import { ListUsuariosComponent } from './dashboard/list-usuarios/list-usuarios.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddEditUsuarioComponent } from './dashboard/add-edit-usuario/add-edit-usuario.component';
import { MaterialModule } from './dashboard/shared/material/material.module';
import { MensajeConfirmacionComponent } from './dashboard/shared/mensaje-confirmacion/mensaje-confirmacion.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    ListUsuariosComponent,
    AddEditUsuarioComponent,
    MensajeConfirmacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
