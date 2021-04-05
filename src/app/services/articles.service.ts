import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from './../models/article.model';

const ARTICLES_URL: string = "./assets/data/articles.json";

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Article[]> {
    return this.httpClient
      .get(ARTICLES_URL)
      .pipe(map(res => res as Article[]));
  }
}
