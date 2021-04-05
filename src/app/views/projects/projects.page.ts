import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
import Project from './../../models/project.model';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})

export class ProjectsPage implements OnInit {

  public projects: Project[] = [];
  public faGithub = faGithub;

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
