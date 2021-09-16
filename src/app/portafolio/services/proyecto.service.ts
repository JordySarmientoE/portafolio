import { Injectable } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  private _proyectos: Proyecto[] = [
    {
      id: 'gifsApp',
      nombre: 'GifsApp',
      descripcion: 'Aplicación desarrollada con Angular y el uso del servicio REST Giphy',
      github: 'https://github.com/JordySarmientoE/GifsAPP',
      url: 'https://sarmientogifsapp.netlify.app/'
    },
    
  ]

  get proyectos(): Proyecto[]{
    return [...this._proyectos] 
  }

  constructor() { }
}
