import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ChangePassword } from './change-password-details';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }

  public updateProfileDetails(user: any, changePw: ChangePassword): Observable<void> {
    return this.http.post<void>('/api/user/profile-update', {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      age: user.age,
      description: user.description,
      destination: user.destination,
      isFlatmate: user.isFlatmate,
      oldPw: changePw.oldPw,
      newPw: changePw.newPw,
      confirmationPw: changePw.confirmartionPw 
    });
    }
}
