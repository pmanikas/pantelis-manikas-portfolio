import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

import { map } from 'rxjs/operators';
import { Article } from './../models/article.model';

const ARTICLES_API_URL: string = `${environment.API_ROOT}articles/`;

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Article[]> {
    return this.httpClient
      .get(ARTICLES_API_URL)
      .pipe(map(res => res as Article[]));
  }
}
