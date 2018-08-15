import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { ActivatedRoute } from '@angular/router';
import { UserServiceService } from '../user-service.service';
import { Match } from '../match';
import { MatchserviceService } from '../matchservice.service';
import { FlatmatesService } from '../flatmates.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user: User;
  id: number;
  match: Match;
  constructor(private route:ActivatedRoute, private userService: UserServiceService,private matchService: MatchserviceService,private flatmate: FlatmatesService) {
    this.route.params.subscribe(params => this.id = +params.id);
   }

  ngOnInit() {
    this.userService.getUser(this.id).subscribe(user => {
      this.user = user;
      this.matchService.getMatchByUserB(user.id).subscribe(match => this.match = match);
    });
  }

  showOptions() {
    const list = document.getElementById('list');
    if (list.className.includes('hidden')) {
      list.classList.remove('hidden');
    }
    else {
      list.classList.add('hidden');
    }
  }
  acceptMatchButtonClick(match: Match) {
    this.matchService.acceptMatch(match.id).subscribe();
    this.match.status=2;
    
  }

  declineMatchButtonClick(match: Match) {
    this.matchService.declineMatch(match.userB.id).subscribe();
    this.match = null;
  }

  sendMatchRequestButtonClick(user: User) {
    this.flatmate.sendMatchRequest(user.id).subscribe();
    this.match = new Match;
    this.match.userB = user;
    this.match.status=1;
  }
  

}
