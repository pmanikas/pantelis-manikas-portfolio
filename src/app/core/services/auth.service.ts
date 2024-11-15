import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import { User } from 'src/app/shared/models/user.model';

const USERS_API_URL: string = `${environment.API_ROOT}users/`;

const headerDict: any = {
  'Content-Type': 'application/json',
}

const requestOptions: any = {
  headers: new HttpHeaders(headerDict),
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public redirectUrl: string | null = null;

  constructor(
    private http: HttpClient,
    private localStorageService: LocalStorageService
  ) { }

  private saveSession(data: any): void {
    const session = {
      token: data.token,
      user: data.user
    }
    this.localStorageService.save('session', session);
  }

  public getToken():any {
    return this.localStorageService.get('session').token || null;
  }

  public isLoggedIn(): boolean{
    return !!this.getToken();
  }

  public getCurrentUserProfile(): Observable<User> {
    return this.http
      .get(`${USERS_API_URL}profile`)
      .pipe(
        map(res => res as User)
      )
  }

  public authenticate(credentials: any): any {
    return this.http
      .post(`${USERS_API_URL}authenticate`, credentials, requestOptions)
      .pipe(
        map(res => this.saveSession(res))
      )
  }

  public logout(): void {
    this.localStorageService.delete('session');
  }
}
