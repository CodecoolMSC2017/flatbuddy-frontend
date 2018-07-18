import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { AuthService } from './auth.service';



@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  getMatches(){
    
    return this.http.get('/api/user/matches/'+this.auth.loggedInUser.id);
  }
}
