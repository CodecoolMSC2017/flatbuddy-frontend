import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../admin-user.service';
import { User } from '../user';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['../matches/matches.component.css']
})
export class AdminUserComponent implements OnInit {

  users: User[] = [];

  constructor(private adminService: AdminUserService) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe(users => this.users = users);
  }

}
