import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { LoginDetails } from '../login-details';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginDetails: LoginDetails = new LoginDetails();

  showError: boolean = false;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() : void {
  }

  getAuth() : void {
    const fieldsComplete = this.checkLoginFields();
    
    if (!fieldsComplete) {
      this.authService.getAuth(this.loginDetails).subscribe(user => {
        sessionStorage.setItem('user', JSON.stringify(user));
        this.authService.loggedInUser = user;
        this.router.navigate(['advertisements']);
      }, error => alert(error.message));

    }
  }

  private checkLoginFields() : boolean {
    const result = !this.loginDetails.email || !this.loginDetails.password;
    if (result) {
      this.showError = true;
      return result;
    }
  }
}
