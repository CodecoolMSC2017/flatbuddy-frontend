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

  errorMessage: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() : void {
  }

  getAuth() : void {
    const fieldsComplete = this.checkLoginFields();
    
    if (!fieldsComplete) {
      this.authService.getAuth(this.loginDetails).subscribe(user => {
        this.router.navigate(['advertisements']);
      }, error => {
        if (error.status == 401) {
          this.showError = true;
          this.errorMessage = "Invalid email or password!";
        }
      });

    }
  }

  private checkLoginFields() : boolean {
    const result = !this.loginDetails.email || !this.loginDetails.password;
    if (result) {
      this.showError = true;
      this.errorMessage = "Email and password cannot be empty!"
      return result;
    }
  }
}
