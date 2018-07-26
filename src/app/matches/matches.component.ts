import { Component, OnInit } from '@angular/core';
import {MatchserviceService} from '../matchservice.service';
import {Observable} from 'rxjs';
import { Match } from '../match';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches$: Match[] = [];

  user: User = new User();
  constructor(private match: MatchserviceService, private authService: AuthService) {}

  ngOnInit() {
    this.authService.getAuth().subscribe(user => this.user = user);
    this.match.getMatches(this.user.id).subscribe(matches =>this.matches$ = matches.sort((a,b) => a.id - b.id));
  }

  acceptMatchButtonClick(match) {
    this.match.acceptMatch(match.id).subscribe();
  }

  declineMatchButtonClick(match: Match) {
    this.match.declineMatch(match.userB).subscribe();
    this.deleteMatch(match);
  }
  deleteMatch(match: Match){
    const index: number = this.matches$.indexOf(match);
    this.matches$.splice(index,1);
  }

}
