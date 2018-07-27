import { Component, OnInit } from '@angular/core';
import { FlatmatesService } from '../flatmates.service';
import { User } from '../user';


@Component({
  selector: 'app-flatmates',
  templateUrl: './flatmates.component.html',
  styleUrls: ['./flatmates.component.css']
})
export class FlatmatesComponent implements OnInit {
  flatmates$: User[] = [];
  constructor(private flatmate: FlatmatesService) { }

  ngOnInit() {
    this.flatmate.getFlatmates().subscribe(flatmates => this.flatmates$ = flatmates.sort((a,b) => a.id - b.id));
  }

  sendMatchRequestButtonClick(user: User) {
    this.flatmate.sendMatchRequest(user.id).subscribe();
  }

}
