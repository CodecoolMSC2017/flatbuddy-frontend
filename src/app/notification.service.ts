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

  setNotificationSeen(userId,notificationId): Observable<any>{
    return this.httpClient.put('/api/user/' + userId + '/notificationseen/' + notificationId,null);
  }

  deleteNotification(notificationId,userId): Observable<any>{
    return this.httpClient.delete('/api/user/' + userId + '/deletenotification/' + notificationId);
  }
}
