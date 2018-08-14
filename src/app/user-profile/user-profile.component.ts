import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../change-password-details'
import { User } from '../user';
import { UserPicture } from '../userpicture';
import { UserProfileService } from '../user-profile.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  pictures: Object[] = [];

  user: User = new User();

  errorMessage: String;

  ageErrorMessage: String;

  passwordsErrorMessage: String;

  showError: boolean = false;

  canEdit: boolean = false;

  changePw: ChangePassword = new ChangePassword();

  constructor(private userProfileService: UserProfileService,
    private authService: AuthService, private router: Router) { }


  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      this.user = user;
      this.pictures = user.pictures;})
  }

  areFieldsFilledOut(): boolean {
    if (!this.canEdit) {
      return true;
    }

    if (this.user.firstName != null && this.user.firstName != "" && this.user.lastName != null
      && this.user.lastName != "" && this.user.age != null &&
      this.user.description != null && this.user.description != "" && this.user.destination != "" && this.user.destination != null) {
        return false;
    }
    this.user.flatmate = false;
    return true;
  }

  modify() : void {
    this.canEdit = true;
  }

  handleError() {
    this.showError = true;
    this.errorMessage = "Old password does not match! You will be logged out in 5 secs!";
  }

  navigateToLogin() : void {
    this.router.navigate(["login"]);
  }

  save() : void {
    this.canEdit = false;
    this.userProfileService.updateProfileDetails(this.user, this.changePw)
        .subscribe(() => {this.showError = false;}), error => {
          if (error.status == 401) {
            this.handleError();
            setTimeout(() => {this.navigateToLogin()}, 5000);
          }
      };

    this.userProfileService.updateProfileDetails(this.user, this.changePw)
      .subscribe(() => {this.showError = false;}, resp => {
        if (resp.error.status == 401) {
          this.handleError();
          setTimeout(() => {this.navigateToLogin()}, 5000);
        } else if (resp.error.status == 500) {
          this.showError = true;
          this.errorMessage = resp.error.message;
        }
      }
    );
  }

  isAgeNumber(): boolean{
    if(this.user.age == null || this.user.age < 15 || this.user.age > 99) {
      this.ageErrorMessage = "Enter a number between 15 and 99!";
      return true;
    }
    return false;
  }

  checkNewPasswords(): boolean {
    if (this.changePw.newPw != this.changePw.confirmationPw) {
      this.passwordsErrorMessage = "New password must be same as confirmation password!";
      return true;
    }
    return false;
  }
  

  onFileChanged(event) {
    this.userProfileService.selectedFile= event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    let newPicture: UserPicture;
    this.userProfileService.uploadPicture().subscribe(() => this.ngOnInit());
  }

  onDeleteButtonClick(picture) {
    const index: number = this.pictures.indexOf(picture);
    this.userProfileService.deletePicture(picture.id).subscribe(this.pictures.splice(index,1));
  }

}
