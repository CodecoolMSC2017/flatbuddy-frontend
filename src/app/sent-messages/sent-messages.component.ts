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

  ngOnInit() {
    this.msgService.getSentMessages().subscribe(
      messages => {
        this.sentMessages = messages;
        console.log(this.sentMessages);
      },
      error => {
        console.log(error);
      }
    );
  }

}
