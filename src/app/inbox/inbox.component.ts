import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {

  inboxMessages$: Message[] = [];

  constructor(private msgService: MessageService) { }

  ngOnInit() {
    this.msgService.getReceivedMessages().subscribe(inboxMessages => {
      this.inboxMessages$ = inboxMessages;
    },
    error => {
      console.log(error);
    }
  );
}

}
