import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SectionHeroComponent } from './sections/section-hero/section-hero.component';
import { SectionAboutMeComponent } from './sections/section-about-me/section-about-me.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SectionHeroComponent,
    SectionAboutMeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
