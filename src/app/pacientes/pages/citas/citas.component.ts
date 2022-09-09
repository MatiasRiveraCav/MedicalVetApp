import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Cita } from '../../interfaces/cita.interface';
import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styles: [],
})
export class CitasComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private citasService: CitasService,
    private router: Router
  ) {}

  cita!: Cita;

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.citasService.getCitaPorId(id)))
      .subscribe((cita) => (this.cita = cita));
  }

  regresar() {
    this.router.navigate(['/pacientes/listado']);
  }
}
