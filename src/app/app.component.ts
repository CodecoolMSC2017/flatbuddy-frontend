import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { AuthService } from './auth.service';
import { MessageService } from './message.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  notificationTimer = interval(5000);
  messageTimer = interval(5000);

  notifications: Notification[]=[];
  messages: any;

  loggedUser;
  

  constructor(private router: Router, private notificationService: NotificationService, private auth: AuthService, private messageService: MessageService) {
    
   }
   ngOnInit(){
    this.notificationTimerStart();
    this.messageTimerStart();
   }
   isHaveUnseen(notifications): boolean{
    for (var item of notifications) {
      if(!item.seen){
        return true;
      }
    }
    return false;
   }
   notificationTimerStart(){
     this.notificationTimer.subscribe(()=>{
        if(this.router.url == "/login" || this.router.url == "/register"){
          return;
        }
      this.notificationService.getNotifications().subscribe((notifications =>{
        this.notifications = notifications;
        let el = document.getElementById('notificationIcon');
        if(this.isHaveUnseen(notifications)){
          console.log('there is an unseen notification');
          if(el != undefined){
            el.style.color = "red";
          }
        }else{
          if(el != undefined){
            el.style.color = "";
          }
        }
      }));
     });
  }
  messageTimerStart(){
    this.messageTimer.subscribe(() => {
      if(this.router.url == "/login" || this.router.url == "/register"){
        return;
      }
      this.messageService.getReceivedMessages().subscribe(messages => {
        this.messages = messages;
        let el = document.getElementById('messageIcon');
        if(this.isHaveUnseen(messages)){

          console.log('there is an unseen message');
          if(el != undefined){
            el.style.color = "red";
          }
        }else{
          if(el != undefined){
            el.style.color = "";
          }
        }
      })
    });
  }
}
