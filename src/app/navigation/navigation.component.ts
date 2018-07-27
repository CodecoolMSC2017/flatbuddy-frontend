import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
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
