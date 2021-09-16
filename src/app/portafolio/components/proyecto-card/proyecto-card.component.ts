import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { ProyectoDialogComponent } from '../proyecto-dialog/proyecto-dialog.component';

@Component({
  selector: 'app-proyecto-card',
  templateUrl: './proyecto-card.component.html',
  styleUrls: ['./proyecto-card.component.css']
})
export class ProyectoCardComponent implements OnInit {

  @Input() proyecto!: Proyecto;

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  abrirDialog() {
    let dialogRef = this.dialog.open(ProyectoDialogComponent, {
      data: this.proyecto,
      width: '280px',
    });
  }

}
