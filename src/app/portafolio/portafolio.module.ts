import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HeaderComponent } from './pages/header/header.component';
import { SkillComponent } from './pages/skill/skill.component';
import { AppRoutingModule } from '../app-routing.module';
import { ContactComponent } from './pages/contact/contact.component';
import { SkillCardComponent } from './components/skill-card/skill-card.component';
import { ImagePipe } from './pipes/image.pipe';

@NgModule({
  declarations: [
    HomeComponent,
    SidenavComponent,
    HeaderComponent,
    SkillComponent,
    ContactComponent,
    SkillCardComponent,
    ImagePipe,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    AppRoutingModule
  ],
  exports: [
    HomeComponent
  ]
})
export class PortafolioModule { }
