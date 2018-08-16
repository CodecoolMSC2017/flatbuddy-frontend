import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inboxMessages$: Message[] = [];
  showError: boolean = false;
  errorMessage: string;
  showMessageModal: boolean = false;
  message: Message;

  constructor(private msgService: MessageService, private router: Router) { }

  ngOnInit() {
    this.msgService.getReceivedMessages().subscribe(inboxMessages => {
      this.inboxMessages$ = inboxMessages;
    },
    error => {
      this.showError = true;
      this.errorMessage = error.error.message;
    }
  );
}

deleteReceivedMessage(messageId) {
  if (confirm("Are you sure to delete this message?") == true) {
    this.msgService.deleteMessage(messageId).subscribe(() => this.ngOnInit());
  }
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

onMessageCloseClick() {
  this.showMessageModal = false;
  this.ngOnInit();
}

onMessageReplyClick() {
  this.router.navigate(['newmessage']);
}
}
