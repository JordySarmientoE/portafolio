import { Pipe, PipeTransform } from '@angular/core';
import { Skill } from '../interfaces/skill.interface';

@Pipe({
  name: 'image'
})
export class ImagePipe implements PipeTransform {

  transform(skill: Skill): string {
    return `../../../../assets/skill/${skill.id}.png`;
  }

  /* ../../../../assets/skill/html.png */
}
