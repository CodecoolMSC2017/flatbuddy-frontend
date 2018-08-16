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

  showMessageModal: boolean = false;

  message: Message;

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

  onMessageClick(id) {
    this.msgService.getMessageById(id).subscribe(
      message => {
        this.showMessageModal = true;
        this.message = message;
      },
      error => {
        console.log(error);
      }
    );
  }

  onMessageDeleteClick(id) {
    if (confirm("Are you sure to delete this message?") == true) {
      this.msgService.deleteMessage(id).subscribe(
        result => {
          this.ngOnInit();
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  onMessageCloseClick() {
    this.showMessageModal = false;
  }

  onMessageReplyClick() {
    this.router.navigate(['newmessage']);


  }

}
