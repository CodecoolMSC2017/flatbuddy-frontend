import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  user = JSON.parse(sessionStorage.getItem('user'));

  enabled: boolean = true;

  constructor() { }

  ngOnInit() { }

  modify() {
    this.enabled = false;
  }

  save() {
    this.enabled = true;
  }



}
