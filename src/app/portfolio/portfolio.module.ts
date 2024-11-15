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

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    PortfolioRoutingModule,
    FontAwesomeModule,
  ],
  declarations: [
    PortfolioComponent,
    HomePage,
    AboutPage,
    ProjectsPage,
    BlogPage,
    ContactPage,
    HeaderComponent,
    FooterComponent
  ],
})
export class PortfolioModule { }
