import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';
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
  showError = false;

  errorMsg: string;

  constructor(private route: ActivatedRoute ,private userService:UserServiceService, private userProfileService: UserProfileService, private adminService: AdminUserService, private router: Router) { }

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
    this.adminService.saveUser(user).subscribe(() => {
      this.router.navigate(['admin/users']);
    });
  }

  deleteUser(user: User){
    this.showError = false;
    this.adminService.deleteUser(user).subscribe(()=>{
      this.router.navigate(['admin/users']);
    },
  (error)=>{
    this.showError = true;
    this.errorMsg = error.error.message;
  });
  }

}
