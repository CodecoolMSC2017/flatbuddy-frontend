import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  id: number;
  constructor(private route:ActivatedRoute, private userService: UserServiceService) {
    this.route.params.subscribe(params => this.id = +params.id);
   }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(user => this.user = user);
  }

}
