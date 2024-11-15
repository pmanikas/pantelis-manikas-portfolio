import { Component, OnInit } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { ProjectsService } from 'src/app/core/services/projects.service';
import Project from 'src/app/shared/models/project.model';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects.page.html',
  styleUrls: ['./projects.page.scss'],
})

export class ProjectsPage implements OnInit {
  public projects: Project[] = [];
  public faGithub: any = faGithub;
  public isLoading: boolean = true;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.getAllProjects();
  }

  private getAllProjects(): void {
    this.projectsService.getAll()
      .subscribe(
        (projects: Project[]) => {
          this.projects = projects;
          this.isLoading = false;
        },
        (_email) => {
          this.isLoading = false;
        }
      );
  }
}
