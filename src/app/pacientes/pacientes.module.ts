import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PacientesRoutingModule } from './pacientes-routing.module';
import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { CitasComponent } from './pages/citas/citas.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { MaterialModule } from '../material/material.module';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';
import { FormsModule } from '@angular/forms';
import { CitaTarjetaComponent } from './components/cita-tarjeta/cita-tarjeta.component';


@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    CitasComponent,
    HomeComponent,
    ListadoComponent,
    ConfirmarComponent,
    CitaTarjetaComponent
  ],
  imports: [
    CommonModule,
    PacientesRoutingModule,
    MaterialModule,
    FormsModule
  ]
})
export class PacientesModule { }
