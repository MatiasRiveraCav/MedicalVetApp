import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';
import { CitasService } from '../../services/citas.service';
import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  

    cita: Cita = {
      id: '',
      nombrePaciente: '',
      edad: 0,
      nombreDueno: '',
      fecha: '',
      hora: '',
      motivoConsulta: '',
      direccion: ''
    }
      

  constructor(
    private citasService: CitasService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private snackBAr: MatSnackBar,
    public dialog: MatDialog,
    
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('editar')) {
      return;
    }

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.citasService.getCitaPorId(id)))
      .subscribe((cita) => (this.cita = cita));
  }

  guardar() {
    if (this.cita.nombrePaciente.trim().length === 0) {
      return;
    }

    if (this.cita.id) {
      this.citasService
        .actualizarCita(this.cita)
        .subscribe((cita) =>{ this.mostrarSnackBar('Registro actualizado')
        this.router.navigate(['/pacientes/listado']);});
    } else {
      this.citasService.agregarCita(this.cita).subscribe((cita) => {
        this.router.navigate(['/pacientes/listado']);
      });
    }
  }

  borrarCita() {
    const dialog = this.dialog.open(ConfirmarComponent, {
      width: '250px',
      data: this.cita,
    });

    dialog.afterClosed().subscribe((result) => {
      if (result) {
        this.citasService.borrarCita(this.cita.id!)
        .subscribe(resp => {
          this.router.navigate(['/pacientes']);
         
        });
      }
    });
  }

  mostrarSnackBar(mensaje: string) {
    this.snackBAr.open(mensaje, 'ok!', {
      duration: 2500,
    });
  }
  

}
