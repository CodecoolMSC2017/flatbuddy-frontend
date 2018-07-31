import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import {Observable} from 'rxjs';
import { Advertisement } from '../advertisement';

@Component({
  selector: 'app-rent-ads',
  templateUrl: './rent-ads.component.html',
  styleUrls: ['./rent-ads.component.css']
})
export class RentAdsComponent implements OnInit {
  rentads$: Advertisement[] = [];
  constructor(private rentad: RentadserviceService) { }

  ngOnInit() {
    this.rentad.getAds().subscribe(rentad => this.rentads$ = rentad.sort((a,b)=> {
      return (a.premium ==b.premium)?0 : a.premium?-1 : 1
    }));
  }

}
