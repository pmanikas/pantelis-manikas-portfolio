import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectsComponent } from './projects/projects.component';
import { ServicesComponent } from './services/services.component';
import { UsersComponent } from './users/users.component';
import { ProjectsDetailsComponent } from './projects/projects-details/projects-details.component';
import { ProjectsListComponent } from './projects/projects-list/projects-list.component';
import { ServicesDetailsComponent } from './services/services-details/services-details.component';
import { ServicesListComponent } from './services/services-list/services-list.component';
import { UsersDetailsComponent } from './users/users-details/users-details.component';
import { UsersListComponent } from './users/users-list/users-list.component';
import { AlertComponent } from './components/alerts/alert.component';
import { ImageUploadComponent } from './components/image-upload/image-upload.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    AdminComponent,
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
    TopbarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class AdminModule { }
