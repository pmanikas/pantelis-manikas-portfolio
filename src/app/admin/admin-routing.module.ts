import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesDetailsComponent } from './services/services-details/services-details.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { ServicesComponent } from './services/services.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard plop'
        }
      },
      {
        path: 'users',
        component: UsersComponent,
        data: {
          title: 'Users'
        },
        children: [
          {
            path: 'list',
            component: UsersListComponent
          },
          {
            path: 'details/:id',
            component: UsersDetailsComponent
          }
        ]
      },
      {
        path: 'projects',
        component: ProjectsComponent,
        data: {
          title: 'Projects'
        },
        children: [
          {
            path: 'list',
            component: ProjectsListComponent
          },
          {
            path: 'details/:id',
            component: ProjectsDetailsComponent
          }
        ]
      },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: 'list',
            component: ServicesListComponent
          },
          {
            path: 'details/:id',
            component: ServicesDetailsComponent
          }
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'admin/dashboard',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
