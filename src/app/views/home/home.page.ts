import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
import Project from './../../models/project.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  public projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  private getAllProjects(): void {
    this.projectsService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects;
    });
  }

}
