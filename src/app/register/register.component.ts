import { Component, OnInit } from '@angular/core';
import { RegisterDetails } from '../register-details';
import { RegisterService } from '../register.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerDetails: RegisterDetails = new RegisterDetails();

  showError: boolean = false;

  errorMessage: string;

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {}

  register() {
    const fieldsComplete = this.checkRegisterFields();
    const passwordChecker = this.checkRegisterPasswords();

    if (!fieldsComplete && !passwordChecker) {
      this.registerService.register(this.registerDetails).subscribe( () => {
        this.router.navigate(['login']);
      }, error => alert(error.message));
    }
  }

  private checkRegisterFields(): boolean {
    const result = !this.registerDetails.email || !this.registerDetails.password || !this.registerDetails.confirmationPassword;

    if (result) {
      this.showError = true;
      this.errorMessage = "Please fill out each inputs!";
      return result;
    }
  }

  private checkRegisterPasswords(): boolean {
    const result = this.registerDetails.password != this.registerDetails.confirmationPassword;

    if (result) {
      this.showError = true;
      this.errorMessage = "Passwords must be the same!";
      return result;
    }
  }

}
