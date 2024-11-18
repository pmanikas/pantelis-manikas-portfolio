import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/services/articles.service';
import { ProjectsService } from 'src/app/core/services/projects.service';
import { ServicesService } from 'src/app/core/services/services.service';
import { Project } from 'src/app/shared/models/project.model';
import { Service } from 'src/app/shared/models/service.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {
  public services: Service[] = [];
  public projects: Project[] = [];
  public articles: Article[] = [];

  public areServicesLoading: boolean = true;
  public areArticlesLoading: boolean = true;
  public areProjectsLoading: boolean = true;

  private maxArticles: number = 6;

  constructor(
    private servicesService: ServicesService,
    private projectsService: ProjectsService,
    private articlesService: ArticlesService,
  ) {}

  ngOnInit(): void {
    this.getAllServices();
    this.getAllProjects();
    this.getAllArticles();
  }

  private getAllServices(): void {
    this.servicesService.getAll()
      .subscribe(
        (projects: Service[]) => {
          this.services = projects;
          this.areServicesLoading = false;
        },
        (_error) => {
          this.areServicesLoading = false;
        }
      )
  }

  private getAllProjects(): void {
    this.projectsService.getAll()
      .subscribe({
        next: (projects: Project[]) => {
          this.projects = projects.slice(0, 4);
          this.areProjectsLoading = false;
        },
        error: (_error) => {
          this.areProjectsLoading = false;
        }
      });
  }

  private getAllArticles(): void {
    this.articlesService.getAll()
      .subscribe(
        (articles: Article[]) => {
          this.articles = articles.slice(0, this.maxArticles);
          this.areArticlesLoading = false;
        },
        (_error) => {
          this.areArticlesLoading = false;
        }
      );
  }

}
