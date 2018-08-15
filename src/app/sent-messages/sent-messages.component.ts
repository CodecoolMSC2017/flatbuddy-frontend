import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message';

@Component({
  selector: 'app-sent-messages',
  templateUrl: './sent-messages.component.html',
  styleUrls: ['./sent-messages.component.css']
})
export class SentMessagesComponent implements OnInit {

  constructor(private msgService: MessageService) { }

  sentMessages: Message[];

  showMessages: boolean;

  showError: boolean;

  errorMessage: string;

  ngOnInit() {
    this.msgService.getSentMessages().subscribe(
      messages => {
        this.sentMessages = messages;
        this.showMessages = true;
      },
      error => {
        this.showError = true;
        this.errorMessage = error.error.message;
      }
    );
  }

  onMessageClick() {
    console.log("bööööööh");
  }

  onMessageDeleteClick() {
    console.log("bááááááááh");
  }

}
