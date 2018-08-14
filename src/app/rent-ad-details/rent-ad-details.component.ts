import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentadserviceService } from '../rentadservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rent-ad-details',
  templateUrl: './rent-ad-details.component.html',
  styleUrls: ['./rent-ad-details.component.css']
})
export class RentAdDetailsComponent implements OnInit {
  rentAd$: any = {};
  rentAdId: number;
  rentAdId2: number;
  constructor(private route:ActivatedRoute, private rentads:RentadserviceService) { 
    this.route.params.subscribe(params => {
      this.rentAdId = params.id;
      this.rentAdId2 = params.id;
    });

  }

  ngOnInit() {
    this.rentads.getAdById(this.rentAdId).subscribe(rentads => { 
      this.rentAd$ = rentads;
    });
  }

}
