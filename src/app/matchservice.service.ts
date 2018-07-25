import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getMatches(){
    
    return this.http.get('/api/user/matches/'+this.auth.loggedInUser.id);
  }

  acceptMatch(matchId): Observable<any>{
    return this.http.put('/api/user/match/accept/'+matchId,JSON);
  }

  declineMatch(userBId): Observable<any>{
    return this.http.delete('/api/user/match/delete/'+userBId);
  }
}
