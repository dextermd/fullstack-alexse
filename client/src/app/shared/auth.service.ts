import {Injectable} from '@angular/core';
import {User} from '../admin/shared/interfaces';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LocalService} from './local.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token = null;

  public error$: Subject<string> = new Subject<string>();

  constructor(
    private http: HttpClient,
    private localService: LocalService
              ) {}

  register(user: User): Observable<User> {
    return  this.http.post<User>('/api/auth/register', user);
  }

  login(user: User): Observable<{token: string}> {
    return this.http.post<{token: string}>('/api/auth/login', user)
      .pipe(
        tap(
          ({token}) => {
            this.localService.setJsonValue('auth-token', token);
            localStorage.setItem('auth-token', token);
            this.setToken(token);
          }
        )
      );
  }

  setToken(token: string) {
    this.token = token;
  }

  getToken(): string {
    return this.token;

  }

  isAuth(): boolean {
    return !!this.token;
  }

  logout() {
    this.setToken(null);
    localStorage.clear();
    this.localService.clearToken();

  }

  getUserPayload() {
    this.token = this.getToken();
    if (this.token) {
      const userPayload = atob(this.token.split('.')[1]);
      return JSON.parse(userPayload);
    }
    else {
      return null;
    }
  }

}
