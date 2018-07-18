import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-rent-ads',
  templateUrl: './rent-ads.component.html',
  styleUrls: ['./rent-ads.component.css']
})
export class RentAdsComponent implements OnInit {
  rentads$: Object;
  constructor(private rentad: RentadserviceService) { }

  ngOnInit() {
    this.rentad.getAds().subscribe(rentad => this.rentads$ = rentad)
  }

}
