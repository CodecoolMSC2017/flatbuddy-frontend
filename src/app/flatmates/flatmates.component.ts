import { Component, OnInit } from '@angular/core';
import { FlatmatesService } from '../flatmates.service';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-flatmates',
  templateUrl: './flatmates.component.html',
  styleUrls: ['../matches/matches.component.css']
})
export class FlatmatesComponent implements OnInit {
  flatmates$: User[] = [];
  user: User = new User();
  constructor(private flatmate: FlatmatesService,private authService: AuthService) { }

  ngOnInit() {
    this.authService.getAuth().pipe(
      tap(user => {
      this.flatmate.getFlatmates(user.id).subscribe(flatmates => this.flatmates$ = flatmates.sort((a,b) => a.id - b.id));
      })
    ).subscribe(user => this.user = user);
  }

  sendMatchRequestButtonClick(user: User) {
    this.flatmate.sendMatchRequest(user.id).subscribe();
    this.removeFromFlatmates(user);
  }

  removeFromFlatmates(user: User){
    const index: number = this.flatmates$.indexOf(user);
    this.flatmates$.splice(index,1);
  }

}
