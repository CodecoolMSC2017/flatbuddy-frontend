import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RegisterDetails } from './register-details';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  
  constructor(private http: HttpClient) { }
  
  register(registerDetails: RegisterDetails): Observable<void> {
    return this.http.post<void>('api/register', {
      email: registerDetails.email,
      password: registerDetails.password,
      confirmationPassword: registerDetails.confirmationPassword
    })
  }

}
