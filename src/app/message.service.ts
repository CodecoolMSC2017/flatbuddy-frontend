import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Message } from 'src/app/message';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Match } from 'src/app/match';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient, private auth: AuthService) { }

  sendMessage(message: Message) {
    return this.http.post<void>('api/message/new', {
      receiverId: message.receiverId,
      subject: message.subject,
      content: message.content,
      date: message.date,
      isEnabledToSender: message.isEnabledToSender,
      isEnabledToReceiver: message.isEnabledToReceiver
    })
  }

  getMessageById(messageId) : Observable<Message> {
    return this.http.get<Message>('/api/message/'+ messageId);
  }

  getReceivedMessages() : Observable<Message[]> {
    return this.http.get<Message[]>('/api/message/received');
  }

  getSentMessages() : Observable<Message[]> {
    return this.http.get<Message[]>('/api/message/sent');
  }

  getPeople(userId) : Observable<User[]> {
    return this.http.get<User[]>('/api/user/flatmates/');
  }

  deleteMessage(messageId) : Observable<any> {
    return this.http.delete('/api/message/delete/' + messageId);
  }


}
