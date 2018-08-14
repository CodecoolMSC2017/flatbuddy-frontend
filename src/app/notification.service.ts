import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Notification } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private httpClient: HttpClient) { }

  getNotifications(): Observable<Notification[]>{
    return this.httpClient.get<Notification[]>('/api/user/notifications');
  }
}
