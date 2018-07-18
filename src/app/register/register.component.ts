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

  constructor(private registerService: RegisterService, private router: Router) { }

  ngOnInit() {}

  register() {
    this.registerService.register(this.registerDetails).subscribe( () => {
      this.router.navigate(['login']);
    }, error => alert(error.message));
  }

}
