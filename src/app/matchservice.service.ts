import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { Match } from './match';
import { MatchesComponent } from './matches/matches.component';



@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getMatches(): Observable<Match[]>{
    
    return this.http.get<Match[]>('/api/user/matches/'+this.auth.loggedInUser.id);
  }

  acceptMatch(matchId): Observable<any>{
    return this.http.put('/api/user/match/accept/'+matchId,null);
  }

  declineMatch(userBId): Observable<any>{
    return this.http.delete('/api/user/match/delete/'+userBId);
  }

}
