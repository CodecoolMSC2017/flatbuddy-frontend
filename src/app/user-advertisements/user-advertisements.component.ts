import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';


@Component({
  selector: 'app-user-advertisements',
  templateUrl: './user-advertisements.component.html',
  styleUrls: ['./user-advertisements.component.css']
})
export class UserAdvertisementsComponent implements OnInit {
  rentads$: Object;
  constructor(private rentad: RentadserviceService) { }

  ngOnInit() {
    this.rentad.getUserAds().subscribe(rentad => this.rentads$ = rentad)
  }

}
