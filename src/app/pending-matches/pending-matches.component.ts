import { Component, OnInit } from '@angular/core';
import {MatchserviceService} from '../matchservice.service';
import { Match } from '../match';
import { User } from '../user';
import { AuthService } from '../auth.service';
import { map, tap, concat } from 'rxjs/operators';
import { PendingMatchesService } from '../pending-matches.service';



@Component({
  selector: 'app-pending-matches',
  templateUrl: './pending-matches.component.html',
  styleUrls: ['./pending-matches.component.css']
})
export class PendingMatchesComponent implements OnInit {
  matches$: Match[] = [];
  user: User;

  constructor(private match: MatchserviceService, private authService: AuthService,private pendingMatch: PendingMatchesService) { }

  ngOnInit() {
    this.pendingMatch.getPendingMatches().subscribe(matches => this.matches$ = matches.sort((a,b) => a.status - b.status));
  }


  acceptMatchButtonClick(match: Match) {
    this.match.acceptMatch(match.id).subscribe();
    this.acceptMatch(match);
    this.deleteMatch(match);
  }
  acceptMatch(match: Match){
    const index: number = this.matches$.indexOf(match);
    this.matches$[index].status = 2;
  }

  declineMatchButtonClick(match: Match) {
    this.match.declineMatch(match.userB.id).subscribe();
    this.deleteMatch(match);
  }
  deleteMatch(match: Match){
    const index: number = this.matches$.indexOf(match);
    this.matches$.splice(index,1);
  }

}
