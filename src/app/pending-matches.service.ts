import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Match } from './match';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PendingMatchesService {

  constructor(private http: HttpClient) { }

  getPendingMatches(): Observable<Match[]>{
    return this.http.get<Match[]>('api/user/matches/status/pending');
  }
}
