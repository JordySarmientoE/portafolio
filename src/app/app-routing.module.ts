import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SkillComponent } from './portafolio/pages/skill/skill.component';
import { HeaderComponent } from './../app/portafolio/pages/header/header.component';
import { ContactComponent } from './portafolio/pages/contact/contact.component';

const routes : Routes = [
  {
    path:'',
    component: HeaderComponent
  },
  {
    path: 'skill',
    component: SkillComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: '**',
    component: HeaderComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
