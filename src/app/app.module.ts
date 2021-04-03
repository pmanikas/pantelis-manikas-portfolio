import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ProjectsService } from './services/projects.service';

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
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';

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
    EmailSubscriptionComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeroComponent,
  ],
  providers: [
    ProjectsService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
