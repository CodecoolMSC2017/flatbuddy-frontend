import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {

  constructor(private msgService: MessageService, private router: Router) { }

  sentMessages: Message[];

  showError: boolean = false;

  errorMessage: string;

  ngOnInit() {
    this.msgService.getSentMessages().subscribe(
      messages => {
        this.sentMessages = messages;
      },
      error => {
        this.showError = true;
        this.errorMessage = error.error.message;
      }
    );
  }

  onMessageClick() {
    console.log("this will show the given message");
  }

  onMessageDeleteClick(id) {
    if (confirm("Are you sure to delete this message?") == true) {
      this.msgService.deleteMessage(id).subscribe(
        resutl => {
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

}
