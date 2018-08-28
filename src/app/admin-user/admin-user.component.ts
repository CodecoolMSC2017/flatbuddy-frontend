import { Component, OnInit } from '@angular/core';
import { AdminUserService } from '../admin-user.service';
import { User } from '../user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['../matches/matches.component.css']
})
export class AdminUserComponent implements OnInit {

  users: User[] = [];

  constructor(private adminService: AdminUserService, private router: Router) { }

  ngOnInit() {
    this.adminService.getUsers().subscribe((users) => {this.users = users},
    (error) =>{
      if(error.status == 403){
        this.router.navigate(['advertisements']);
      }
    });
    
  }

}
