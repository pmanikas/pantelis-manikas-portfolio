import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomePage } from './home/home.page';
import { ProjectsPage } from './projects/projects.page';
import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { ContactPage } from './contact/contact.page';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { CreditsComponent } from './components/credits/credits.component';
import { NavComponent } from './components/nav/nav.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ServicesComponent } from './components/services/services.component';
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { EmailSubscriptionComponent } from './components/email-subscription/email-subscription.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroComponent } from './components/hero/hero.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PortfolioComponent,
    HomePage,
    AboutPage,
    ProjectsPage,
    BlogPage,
    ContactPage,
    HeaderComponent,
    FooterComponent,
    ArticlesComponent,
    CreditsComponent,
    NavComponent,
    ProjectsComponent,
    SingleProjectComponent,
    ServicesComponent,
    SocialMediaComponent,
    EmailSubscriptionComponent,
    HeroComponent
  ],
})
export class PortfolioModule { }
