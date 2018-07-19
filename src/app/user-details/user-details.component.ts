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

  user$: Object;
  constructor(private route:ActivatedRoute, private userService: UserServiceService) {
    this.route.params.subscribe(params => this.user$ = params.id);
   }

  ngOnInit() {
    this.userService.getUser(this.user$).subscribe(userService => this.user$ = userService);
  }

}
