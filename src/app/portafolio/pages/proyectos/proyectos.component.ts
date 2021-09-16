import { Component, OnInit } from '@angular/core';
import { ProyectoService } from '../../services/proyecto.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  constructor(private proyectoService: ProyectoService) { }

  ngOnInit(): void {
  }

  get proyectos(){
    return this.proyectoService.proyectos
  }

}
