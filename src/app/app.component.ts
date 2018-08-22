import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { interval } from 'rxjs';
import { NotificationService } from './notification.service';
import { Notification } from './notification';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  notificationTimer = interval(5000);
  notifications: Notification[]=[];
  

  constructor(private router: Router, private notificationService: NotificationService, private auth: AuthService) {
    
   }
   ngOnInit(){
    this.notificationTimerStart();
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
}
