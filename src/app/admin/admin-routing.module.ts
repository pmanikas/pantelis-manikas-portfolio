import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { UsersComponent } from './main/users/users.component';
import { UsersListComponent } from './main/users/users-list/users-list.component';
import { ProjectsDetailsComponent } from './main/projects/projects-details/projects-details.component';
import { ProjectsListComponent } from './main/projects/projects-list/projects-list.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ServicesDetailsComponent } from './main/services/services-details/services-details.component';
import { ServicesListComponent } from './main/services/services-list/services-list.component';
import { ServicesComponent } from './main/services/services.component';
import { UsersDetailsComponent } from './main/users/users-details/users-details.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { MainAdminComponent } from './main/main.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        component: MainAdminComponent,
        canActivate: [
          AuthGuard
        ],
        children: [
          {
            path: 'dashboard',
            component: DashboardComponent,
          },
          {
            path: 'users',
            component: UsersComponent,
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
        path: 'auth',
        component: AuthComponent,
        children: [
          {
            path: 'login',
            component: LoginComponent
          },
        ]
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
