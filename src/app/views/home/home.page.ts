import { Component, OnInit } from '@angular/core';
import { ProjectsService } from './../../services/projects.service';
import { ArticlesService } from './../../services/articles.service';
import Project from './../../models/project.model';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-home-page',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss']
})

export class HomePage implements OnInit {

  public projects: Project[] = [];
  public articles: Article[] = [];

  constructor(
    private projectsService: ProjectsService,
    private articlesService: ArticlesService,
  ) {}

  ngOnInit(): void {
    this.getAllProjects();
    this.getAllArticles();
  }

  private getAllProjects(): void {
    this.projectsService.getAll().subscribe((projects: Project[]) => {
      this.projects = projects.slice(0, 3);
    });
  }

  private getAllArticles(): void {
    this.articlesService.getAll().subscribe((articles: Article[]) => {
      this.articles = articles.slice(0,2);
    });
  }

}
