import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('/api/admin/users');
  }
  
  saveUser(user: User){
    return this.http.post<void>('/api/admin/user/edit/'+user.id, {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      description: user.description,
      isFlatmate: user.flatmate
    });
  }
}
