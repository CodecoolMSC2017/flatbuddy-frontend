import { Component, OnInit } from '@angular/core';
import {ChangePassword} from '../change-password-details'
import { User } from '../user';
import { UserProfileService } from '../user-profile.service';
import { error } from 'util';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user: User = new User();

  enabled: boolean = true;

  changePw: ChangePassword = new ChangePassword();

  constructor(private userProfileService: UserProfileService, private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().subscribe(user => this.user = user);
  }

  modify() : void {
    console.log(this.user);
    this.enabled = false;
  }

  save() : void {
    this.enabled = true;
    this.userProfileService.updateProfileDetails(this.user, this.changePw)
    .subscribe(console.log, error => {
      console.log(error);
    });
  }
}
