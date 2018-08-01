import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-advertisement-edit',
  templateUrl: './advertisement-edit.component.html',
  styleUrls: ['./advertisement-edit.component.css']
})
export class AdvertisementEditComponent implements OnInit {

  rentAd: Object;
  constructor(private adService: RentadserviceService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => this.rentAd = params.id);
  }

  ngOnInit() {
    this.adService.getAdById(this.rentAd).subscribe(rentads => this.rentAd = rentads);
  }

  editAdvertisement(){

    this.adService.updateAdvertisement(this.rentAd).subscribe();
    this.router.navigate(["myadvertisements"]);
  }

}
