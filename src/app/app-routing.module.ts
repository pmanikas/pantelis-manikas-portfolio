import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './views/home/home.page';
import { AboutPage } from './views/about/about.page';
import { ProjectsPage } from './views/projects/projects.page';
import { BlogPage } from './views/blog/blog.page';
import { ContactPage } from './views/contact/contact.page';

const routes: Routes = [
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
    path: 'blog',
    component: BlogPage
  },
  {
    path: 'contact',
    component: ContactPage
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
