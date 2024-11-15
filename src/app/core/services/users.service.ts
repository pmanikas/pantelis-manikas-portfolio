import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { User } from 'src/app/shared/models/user.model';

const USERS_API_URL: string = `${environment.API_ROOT}users/`;

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<User[]> {
    return this.http.get(`${USERS_API_URL}`)
      .pipe(
        map(res => res as User[])
      )
  }

  public getById(id: string): Observable<User> {
    return this.http.get(`${USERS_API_URL}${id}`)
      .pipe(
        map(res => res as User)
      )
  }

  public add(user: User): any {
    return this.http
      .post(`${USERS_API_URL}`, user)
  }

  public edit(user: User): any {
    return this.http
      .put(`${USERS_API_URL}${user._id}`, user)
  }

  public remove(id: string | undefined): any {
    return this.http
      .delete(`${USERS_API_URL}${id}`)
  }
}
