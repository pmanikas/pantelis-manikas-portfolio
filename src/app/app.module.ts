import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { LogoComponent } from './components/logo/logo.component';
import { ButtonComponent } from './components/button/button.component';
import { HeroComponent } from './components/hero/hero.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { CreditsComponent } from './components/credits/credits.component';
import { HomeComponent } from './views/home/home.component';
import { AboutComponent } from './views/about/about.component';
import { DeferLoadDirective } from './directives/defer-load.directive';
import { ImageResourceComponent } from './components/image-resource/image-resource.component';

@NgModule({
  declarations: [
    DeferLoadDirective,

    HomeComponent,
    AboutComponent,

    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    LogoComponent,
    ButtonComponent,
    HeroComponent,
    SocialMediaComponent,
    CreditsComponent,
    ImageResourceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
  ],
  exports: [
    HeroComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
