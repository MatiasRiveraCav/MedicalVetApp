import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
  ]
})
export class ListadoComponent implements OnInit {

  citas: Cita[]= [];
  
  constructor(private citasService: CitasService) { }

  

  ngOnInit(): void {
    this.citasService.getCitas()
    .subscribe( citas => this.citas = citas);
  }
}
