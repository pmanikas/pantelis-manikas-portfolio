import { Component, OnInit } from '@angular/core';
import { ArticlesService } from './../../services/articles.service';
import { Article } from 'src/app/models/article.model';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})

export class BlogPage implements OnInit {

  public articles: Article[] = [];

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  private getAllArticles(): void {
    this.articlesService.getAll().subscribe((articles: Article[]) => {
      this.articles = articles;
    });
  }

}
