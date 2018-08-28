import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { pipe } from 'rxjs';
import { User } from '../user';
import { tap } from 'rxjs/operators';
import { NotificationService } from '../notification.service';
import { Notification } from '../notification';


@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  user: User = new User();
  notifications: Notification[];
  newNotifications: number;

  constructor(private authService: AuthService, private router: Router,private notificationService: NotificationService) { }

  ngOnInit() { 
    this.notificationService.getNotifications().subscribe(notifications => {
      this.notifications = notifications;
      this.notifications.forEach(element => {
        if (!element.seen) {
          this.newNotifications =+1;
        }
      });
    });
    this.authService.getAuth().subscribe(user =>{
        this.user = user
        console.log(user);
      });
   }

  deleteAuth() {
    this.authService.deleteAuth()
      .pipe(finalize(() => this.router.navigate(['login'])))
      .subscribe();
  }

  public resetRadio(event) {
    if(event.target.value == 2 && event.target.checked){
      event.target.value = 1;
      event.target.checked = false;
    }
    else if(event.target.value == 1){
      event.target.value = 2;
    }
  }
}
