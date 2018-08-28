import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-admin-user-edit',
  templateUrl: './admin-user-edit.component.html',
  styleUrls: ['./admin-user-edit.component.css']
})
export class AdminUserEditComponent implements OnInit {

  user:User;
  userID: number;

  constructor(private route: ActivatedRoute ,private userService:UserServiceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.userID = params.id;
      this.userService.getUser(this.userID).subscribe(user => this.user = user);
    });
  }

  

}
