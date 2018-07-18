import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginDetails } from './login-details';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public loggedInUser: User;
  constructor(private http: HttpClient) { }

  getAuth(loginDetails: LoginDetails): Observable<User> {
    return this.http.get<User>('/api/auth', {
      headers: new HttpHeaders({
        'Authorization': 'Basic ' + window.btoa(loginDetails.email + ':' + loginDetails.password)
      })
    });
  }

  deleteAuth(): Observable<void> {
    return this.http.delete<void>('/api/auth');
  }
}
