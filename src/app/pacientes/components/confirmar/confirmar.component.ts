import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Cita } from '../../interfaces/cita.interface';

@Component({
  selector: 'app-confirmar',
  templateUrl: './confirmar.component.html',
  styles: [
  ]
})
export class ConfirmarComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<ConfirmarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Cita,) { }

  ngOnInit(): void {
  }

  borrar(){
    this.dialogRef.close(true);
  }
  cerrar(){
   this.dialogRef.close();
  }

}
