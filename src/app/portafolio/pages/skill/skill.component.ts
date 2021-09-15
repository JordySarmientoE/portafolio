import { Component } from '@angular/core';
import { SkillService } from '../../services/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent{

  constructor(private skillService: SkillService) { 
    console.log(this.skills)
  }

  get skills(){
    return this.skillService.skills;
  }

}
