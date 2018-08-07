import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { ChangePassword } from './change-password-details';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  selectedFile: File;

  constructor(private http: HttpClient) { }

  public updateProfileDetails(user: User, changePw: ChangePassword): Observable<void> {
    return this.http.post<void>('/api/user/profile-update', {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      gender: user.gender,
      age: user.age,
      description: user.description,
      destination: user.destination,
      isFlatmate: user.flatmate,
      oldPw: changePw.oldPw,
      newPw: changePw.newPw,
      confirmationPw: changePw.confirmationPw
    });
  }

  uploadPicture() {
    const uploadData = new FormData();
    uploadData.append('file', this.selectedFile, this.selectedFile.name);
    this.http.post('/api/user/uploadpicture', uploadData, {
      reportProgress: true,
      observe: 'events'
    })
      .subscribe(event => {
        console.log(event);
      });
  }
}
