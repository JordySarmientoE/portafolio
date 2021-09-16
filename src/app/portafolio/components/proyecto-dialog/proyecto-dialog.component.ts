import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Proyecto } from '../../interfaces/proyecto.interface';

@Component({
  selector: 'app-proyecto-dialog',
  templateUrl: './proyecto-dialog.component.html',
  styleUrls: ['./proyecto-dialog.component.css']
})
export class ProyectoDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Proyecto) { }

  ngOnInit(): void {
    console.log(this.data)
  }

}
