import { Injectable } from '@angular/core';
import { Skill } from '../interfaces/skill.interface';

@Injectable({
  providedIn: 'root'
})
export class SkillService {

  private _skills: Skill[] = [
    {
      id: 'html',
      nombre: 'HTML'
    },
    {
      id: 'css',
      nombre: 'CSS'
    },
    {
      id: 'javascript',
      nombre: 'JavaScript'
    },
    {
      id: 'sql',
      nombre: 'MySQL'
    },
    {
      id: 'angular',
      nombre: 'Angular'
    },
    {
      id: 'nodejs',
      nombre: 'Node JS'
    },
    {
      id: 'mongodb',
      nombre: 'MongoDB'
    },
    {
      id: 'express',
      nombre: 'Express'
    }
  ]

  get skills(): Skill[]{
    return [...this._skills] 
  }

  constructor() { }
}
