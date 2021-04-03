import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import Service from './../models/service.model';

const SERVICES_URL: string = "./assets/data/services.json";

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
