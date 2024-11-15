import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';
import { ArticlesService } from 'src/app/core/services/articles.service';

@Component({
  selector: 'app-blog-page',
  templateUrl: './blog.page.html',
  styleUrls: ['./blog.page.scss']
})

export class BlogPage implements OnInit {
  public articles: Article[] = [];
  public isLoading: boolean = true;

  constructor(private articlesService: ArticlesService) {}

  ngOnInit(): void {
    this.getAllArticles();
  }

  private getAllArticles(): void {
    this.articlesService.getAll()
      .subscribe(
        (articles: Article[]) => {
          this.isLoading = false;
          this.articles = articles;
        },
        (_error) => {
          this.isLoading = false;
        }
      );
  }
}
