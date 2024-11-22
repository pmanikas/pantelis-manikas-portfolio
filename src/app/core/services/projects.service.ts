import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Project } from 'src/app/shared/models/project.model';

const PROJECTS_API_URL: string = `${environment.API_ROOT}projects/`;
@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    constructor(private httpClient: HttpClient) { }

    public getAll(): Observable<Project[]> {
        return this.httpClient
            .get(PROJECTS_API_URL)
            .pipe(
                map(res => res as Project[]),
            );
    }

    public getById(id: string): Observable<Project> {
        return this.httpClient.get(`${PROJECTS_API_URL}/${id}`)
            .pipe(
                map(res => res as Project)
            )
    }

    public add(project: Project): any {
        return this.httpClient
            .post(`${PROJECTS_API_URL}`, project)
    }

    public edit(project: Project): Observable<Project> {
        return this.httpClient
            .put(`${PROJECTS_API_URL}/${project._id}`, project) as Observable<Project>
    }

    public remove(id: string | undefined): any {
        return this.httpClient
            .delete(`${PROJECTS_API_URL}${id}`)
    }
}
