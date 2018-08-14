import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';


@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  notifications: Notification[]
  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
    this.notificationService.getNotifications().subscribe(notifications => this.notifications = notifications);
  }

  notificationClick(notification: Notification){
   // console.log (notification);
    if(notification.idOfSubject == null){
      console.log("null Notification");
    }
    else{
      if(notification.type == "match"){
        console.log("match Notification");
        window.location.href='/profile/'+ notification.idOfSubject;
      }
      if(notification.type == "slot"){
        console.log("slot Notification");
        window.location.href='/advertisement/'+ notification.idOfSubject;
      }
      if(notification.type == "advertisement"){
        console.log("advertisement Notification");
        window.location.href='/advertisement/'+ notification.idOfSubject;
      }
    }
  }

}
