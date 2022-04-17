import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionHeroComponent } from './sections/section-hero/section-hero.component';
import { SectionAboutMeComponent } from './sections/section-about-me/section-about-me.component';
import { SectionExperiencesComponent } from './sections/section-experiences/section-experiences.component';
import { SectionProjectsComponent } from './sections/section-projects/section-projects.component';
import { HttpClientModule } from '@angular/common/http'
import { SectionProjectsService } from './core/services/section-projects.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionHeroComponent,
    SectionAboutMeComponent,
    SectionExperiencesComponent,
    SectionProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [SectionProjectsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
