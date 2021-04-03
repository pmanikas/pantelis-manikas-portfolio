import { Component, OnInit } from '@angular/core';
import { ProjectsService } from "./../../services/projects.service";
import Project from "./../../models/project.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public projects: Project[] = [];

  constructor(private projectsService: ProjectsService) { }

  ngOnInit(): void {
    this.getAllProjects();
  }

  private getAllProjects(): void {
    this.projectsService.getAll()
      .subscribe((projects: Project[]) => {
        this.projects = projects;
      })
  }
}
