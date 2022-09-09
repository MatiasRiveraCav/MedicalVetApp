import { Component, Input } from '@angular/core';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-cita-tarjeta',
  templateUrl: './cita-tarjeta.component.html',
  styles: [
  ]
})
export class CitaTarjetaComponent  {

  @Input() cita! : Cita;

}
