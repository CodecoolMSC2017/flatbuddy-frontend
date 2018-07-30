import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../change-password-details'
import { User } from '../user';
import { UserProfileService } from '../user-profile.service';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();

  errorMessage: String;

  showError: boolean = false;

  enabled: boolean = true;

  changePw: ChangePassword = new ChangePassword();

  constructor(private userProfileService: UserProfileService,
    private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(user => this.user = user);
  }

  private areFieldsFilledOut(): boolean {
    let filledOut = this.user.firstName != "" && this.user.lastName != "" && 
        this.user.gender != "" && this.user.age != null && 
        this.user.description != "" && this.user.destination != "";

    if (filledOut) {
      this.user.flatmate = true;
    } else {
      this.user.flatmate = false;
    }

    return filledOut;
  }

  modify() : void {
    const flatMateInput = document.getElementById("showPeopleInput");
    this.enabled = false;
    if(!this.areFieldsFilledOut()) {
      flatMateInput.setAttribute("disabled", "true"); 
    } else if (this.areFieldsFilledOut()) {
      flatMateInput.setAttribute("disabled", "false");
    }
  }

  handleError() {
    this.showError = true;
    this.errorMessage = "Old password does not match! You will be logged out in 5 secs!";
  }

  navigateToLogin() : void {
    this.router.navigate(["login"]);
  }

  save() : void {
    this.enabled = true;
    document.getElementById("showPeopleInput").setAttribute("disabled", "true");

    if (this.areFieldsFilledOut) {
      this.userProfileService.updateProfileDetails(this.user, this.changePw)
        .subscribe(() => {this.showError = false;}), error => {
          if (error.status == 401) {
            this.handleError();
            setTimeout(() => {this.navigateToLogin()}, 5000);
          }
      };
    }
    
  }
}
