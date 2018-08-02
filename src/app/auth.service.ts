import { Injectable } from '@angular/core'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { LoginDetails } from './login-details';
import { User } from './user';
import { isUndefined } from 'util';
import { GoogleAuthService } from 'ng-gapi';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private googleAuthService: GoogleAuthService) { }

  getAuth(loginDetails?: LoginDetails): Observable<User> {
    const httpOptions = {};
    if (!isUndefined(loginDetails)) {
      httpOptions['headers'] = new HttpHeaders({
          'Authorization': 'Basic ' + window.btoa(loginDetails.email + ':' + loginDetails.password)
      });
    }
    return this.http.get<User>('/api/auth', httpOptions);
  }

  deleteAuth(): Observable<void> {
    return this.http.delete<void>('/api/auth');
  }

  getGoogleAuth(): Observable<User> {
    return this.googleAuthService.getAuth()
      .flatMap(googleAuth => from(googleAuth.signIn()))
      .flatMap(googleUser => {
        return this.http.post<User>('/api/auth', {idToken: googleUser.getAuthResponse().id_token});
      });
  }

  deleteGoogleAuth(): void {
    this.googleAuthService.getAuth().subscribe((auth) => {
      try {
        auth.signOut();
      } catch (e) {
        console.error(e);
      }
    });
  }
}