import { Component, OnInit } from '@angular/core';
import {MatchserviceService} from '../matchservice.service';
import {Observable} from 'rxjs';
@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches$: Object;
  constructor(private match: MatchserviceService) { }

  ngOnInit() {
    this.match.getMatches().subscribe(match => this.matches$ = match)
  }

  acceptMatchButtonClick(matchId) {
    this.match.acceptMatch(matchId);
    console.log(matchId);
  }

}
