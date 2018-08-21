import { Component, OnInit, Output } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import {Observable} from 'rxjs';
import { Advertisement } from '../advertisement';
import { AdvertisementFilterComponent } from '../advertisement-filter/advertisement-filter.component';
import { AdvertisementFilterService } from '../advertisement-filter.service';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-rent-ads',
  templateUrl: './rent-ads.component.html',
  styleUrls: ['./rent-ads.component.css']
})
export class RentAdsComponent implements OnInit {
  rentads$: Advertisement[] = [];
  url: any;
  constructor(private rentad: RentadserviceService, private filterService: AdvertisementFilterService) {
   }

  ngOnInit() {
    this.rentad.getAds().subscribe(rentad => this.rentads$ = rentad.sort((a,b)=> {
      return (a.premium ==b.premium)?0 : a.premium?-1 : 1
    }));
    
    this.filterService.generatedUrlObs.subscribe(url => {
      this.url = url;
      this.filterAds(url);
    });

    //this.filterService.setFunc(this.filterAds);

  }

  filterAds(url): void{
    this.rentads$ = [];
    this.rentad.getFilteredAds(url).subscribe(rentad => this.rentads$ = rentad.sort((a,b)=> {
      return (a.premium ==b.premium)?0 : a.premium?-1 : 1
    }));
  }
  
}
