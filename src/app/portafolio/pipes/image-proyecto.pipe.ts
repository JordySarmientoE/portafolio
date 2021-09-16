import { Pipe, PipeTransform } from '@angular/core';
import { Proyecto } from '../interfaces/proyecto.interface';

@Pipe({
  name: 'imageProyecto'
})
export class ImageProyectoPipe implements PipeTransform {

  transform(proyecto: Proyecto): string {
    return `../../../../assets/proyectos/${proyecto.id}.png`;
  }

}
