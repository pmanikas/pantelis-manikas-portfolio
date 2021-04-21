import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Service from './../models/service.model';

const SERVICES_URL: string = `${environment.API_ROOT}services/`;

@Injectable({
  providedIn: 'root'
})

export class ServicesService {
  constructor(private httpClient: HttpClient) {}

  public getAll(): Observable<Service[]> {
    return this.httpClient
      .get(SERVICES_URL)
      .pipe(map(res => res as Service[]));
  }
}
