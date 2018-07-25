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

  acceptMatch(matchId){
    console.log("eljut ide" + matchId);
    return this.http.put('/api/user/match/accept/'+matchId,JSON);
  }
}
