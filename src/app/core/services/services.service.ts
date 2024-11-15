import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Service } from 'src/app/shared/models/service.model';

const SERVICES_API_URL: string = `${environment.API_ROOT}services/`;

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Service[]> {
    return this.httpClient
      .get(SERVICES_API_URL)
      .pipe(map(res => res as Service[]));
  }

  public getById(id: string): Observable<Service> {
    return this.httpClient.get(`${SERVICES_API_URL}/${id}`)
      .pipe(
        map(res => res as Service)
      )
  }

  public add(service: Service): any {
    return this.httpClient
      .post(`${SERVICES_API_URL}`, service)
  }

  public edit(service: Service): any {
    return this.httpClient
      .put(`${SERVICES_API_URL}/${service._id}`, service)
  }

  public remove(id: string | undefined): any {
    return this.httpClient
      .delete(`${SERVICES_API_URL}${id}`)
  }
}
