import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './main/dashboard/dashboard.component';
import { ProjectsComponent } from './main/projects/projects.component';
import { ServicesComponent } from './main/services/services.component';
import { UsersComponent } from './main/users/users.component';
import { ProjectsDetailsComponent } from './main/projects/projects-details/projects-details.component';
import { ProjectsListComponent } from './main/projects/projects-list/projects-list.component';
import { ServicesDetailsComponent } from './main/services/services-details/services-details.component';
import { ServicesListComponent } from './main/services/services-list/services-list.component';
import { UsersDetailsComponent } from './main/users/users-details/users-details.component';
import { UsersListComponent } from './main/users/users-list/users-list.component';
import { MainAdminComponent } from './main/main.component';
import { AlertComponent } from './components/alerts/alert.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './auth/login/login.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AdminComponent,
    MainAdminComponent,
    DashboardComponent,
    ProjectsComponent,
    ServicesComponent,
    UsersComponent,
    ProjectsDetailsComponent,
    ProjectsListComponent,
    ServicesDetailsComponent,
    ServicesListComponent,
    UsersDetailsComponent,
    UsersListComponent,
    AlertComponent,
    ImageUploadComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ]
})
export class AdminModule { }
