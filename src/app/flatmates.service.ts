import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlatmatesService {

  constructor(private httpClient: HttpClient) { }

  getFlatmates(): Observable<User[]>{
    return this.httpClient.get<User[]>('/api/user/flatmates');
  }

  sendMatchRequest(userId) {
    return this.httpClient.post<void>('api/user/match/send/' + userId,null);
  }
}
