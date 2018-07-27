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

  modify() : void {
    console.log(this.user);
    this.enabled = false;
  }

  handleError() {
    this.showError = true;
    this.errorMessage = "Old password does not match! You have been logged out in 5 secs!";
  }

  navigateToLogin() : void {
    this.router.navigate(["login"]);
  }

  save() : void {
    this.enabled = true;
    this.userProfileService.updateProfileDetails(this.user, this.changePw)
    .subscribe(console.log, error => {
      if (error.status == 401) {
        this.handleError();
        setTimeout(() => {this.navigateToLogin()}, 5000);
      }
    });
  }
}
