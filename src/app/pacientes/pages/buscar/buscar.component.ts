import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino: string = '';
  citas: Cita[] = [];
  citaSeleccionada!: Cita | undefined;

  constructor(private citasService: CitasService) { }

  ngOnInit(): void {
  }


  buscando() {
    this.citasService.getSugerencias(this.termino.trim())
    .subscribe(citas => this.citas = citas)
  }



  opcionSeleccionada(event: MatAutocompleteSelectedEvent){

    if(!event.option.value){
      this.citaSeleccionada = undefined;
      return;
    }

    const cita: Cita = event.option.value;
    this.termino =cita.nombrePaciente;
    
    this.citasService.getCitaPorId( cita.id! )
    .subscribe( cita => this.citaSeleccionada = cita);
  }


}
