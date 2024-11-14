import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
import { ArticlesService } from './../../services/articles.service';
import Project from './../../models/project.model';
import { Article } from 'src/app/models/article.model';
import Service from 'src/app/models/service.model';
import { ServicesService } from 'src/app/services/services.service';

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
      .subscribe(
        (projects: Project[]) => {
          this.projects = projects.slice(0, 4);
          this.areProjectsLoading = false;
        },
        (_error) => {
          this.areProjectsLoading = false;
        }
      );
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
