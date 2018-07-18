import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MatchserviceService {

  constructor(private http: HttpClient ) { }

  getMatches(){
    return this.http.get('/api/user/matches/1');
  }
}
