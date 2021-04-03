import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Project from './../models/project.model';

const PROJECTS_URL: string = "./assets/data/projects.json";

@Injectable()

export class ProjectsService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Project[]> {
    return this.httpClient
      .get(PROJECTS_URL)
      .pipe(map(res => res as Project[]));
  }
}
