import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './components/articles/articles.component';
import { ButtonComponent } from './components/button/button.component';
import { CardComponent } from './components/card/card.component';
import { CreditsComponent } from './components/credits/credits.component';
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';
import { HeroComponent } from './components/hero/hero.component';
import { ImageResourceComponent } from './components/image-resource/image-resource.component';
import { LoaderComponent } from './components/loader/loader.component';
import { LogoComponent } from './components/logo/logo.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { DeferLoadDirective } from './directives/defer-load.directive';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    NavComponent,
    LogoComponent,
    ButtonComponent,
    HeroComponent,
    SocialMediaComponent,
    CreditsComponent,
    ImageResourceComponent,
    EmailSubscriptionComponent,
    ProjectsComponent,
    ServicesComponent,
    CardComponent,
    ArticlesComponent,
    LoaderComponent,
    DeferLoadDirective
  ],
  exports: [
    NavComponent,
    LogoComponent,
    ButtonComponent,
    HeroComponent,
    SocialMediaComponent,
    CreditsComponent,
    ImageResourceComponent,
    EmailSubscriptionComponent,
    ProjectsComponent,
    ServicesComponent,
    CardComponent,
    ArticlesComponent,
    LoaderComponent
  ]
})
export class SharedModule { }
