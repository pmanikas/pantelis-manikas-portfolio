import { Component, Input } from '@angular/core';
import { Article } from 'src/app/shared/models/article.model';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})

export class ArticlesComponent {

  @Input() articles: Article[] = [];

  constructor() { }
}
