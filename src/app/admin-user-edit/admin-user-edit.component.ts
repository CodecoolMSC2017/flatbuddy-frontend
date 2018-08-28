import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserProfileService } from '../user-profile.service';
import { UserAdvertisementsComponent } from '../user-advertisements/user-advertisements.component';
import { HttpBackend, HttpClient } from '@angular/common/http';
import { AdminUserService } from '../admin-user.service';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  user:User;
  userID: number;

  constructor(private route: ActivatedRoute ,private userService:UserServiceService, private userProfileService: UserProfileService, private adminService: AdminUserService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params.id;
      this.userService.getUser(this.userID).subscribe(user => this.user = user);
    });
  }

  onDeleteButtonClick(picture){
    const index: number = this.user.pictures.indexOf(picture);
    this.userProfileService.deletePicture(picture.id).subscribe(this.user.pictures.splice(index,1));
  }

  saveUser(user: User){
    this.adminService.saveUser(user).subscribe();
  }

  deleteUser(user: User){
    this.adminService.deleteUser(user).subscribe();
  }

}