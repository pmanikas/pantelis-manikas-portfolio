import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPage } from './about/about.page';
import { BlogPage } from './blog/blog.page';
import { ContactPage } from './contact/contact.page';
import { HomePage } from './home/home.page';
import { ProjectsPage } from './projects/projects.page';
import { PortfolioComponent } from './portfolio.component';
import { SingleProjectComponent } from './projects/single-project/single-project.component';

const routes: Routes = [
  {
    path: '',
    component: PortfolioComponent,
    children: [
      {
        path: '',
        component: HomePage
      },
      {
        path: 'about',
        component: AboutPage
      },
      {
        path: 'projects',
        component: ProjectsPage
      },
      {
        path: 'projects/:id',
        component: SingleProjectComponent
      },
      {
        path: 'blog',
        component: BlogPage
      },
      {
        path: 'contact',
        component: ContactPage
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
