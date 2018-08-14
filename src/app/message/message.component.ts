import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';
import { Message } from '../message';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { Match } from 'src/app/match';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  constructor(private msgService: MessageService, private router: Router, private authService: AuthService) { }

  newMessage: Message = new Message();
  showError: boolean = false;
  showInfo: boolean = false;
  errorMessage: string;
  information: string;
  user: User = new User();
  users$: User[];

  ngOnInit() {
    this.authService.getAuth().subscribe(user => {
      this.msgService.getPeople(user.id).subscribe(users => {
        this.user = user;
        this.users$ = users;
      })
    })
  }

  sendNewMessage() {
    if (this.checkMessageFormFields) {
      this.msgService.sendMessage(this.newMessage).subscribe(() => {
        this.showError = false;
        this.showInfo = true;
        this.information = "Message sent!";
        this.newMessage.receiverId = null;
        this.newMessage.subject = "";
        this.newMessage.content = "";
      },
      (error) => {
          this.showInfo = false;
          this.showError = true;
          this.errorMessage = error.error.message;
      });
    }
  }

  private checkMessageFormFields() : boolean {
    const result = !this.newMessage.content || !this.newMessage.subject || !this.newMessage.receiverId;

    if (result) {
      this.showError = true;
      this.errorMessage = "Please fill out each fields!";
      return result;
    }
  }

}
