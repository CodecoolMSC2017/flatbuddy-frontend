import { Component, OnInit, ViewChild } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import { RentAdsComponent } from '../rent-ads/rent-ads.component';
import { AdvertisementFilterService } from '../advertisement-filter.service';
import { NewAdvertisementComponent } from '../new-advertisement/new-advertisement.component';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-advertisement-filter',
  templateUrl: './advertisement-filter.component.html',
  styleUrls: ['./advertisement-filter.component.css']
})
export class AdvertisementFilterComponent implements OnInit {

  url: String;
  method: any  
  advCity: String;
  advCountry: String;
  advMaxCost: number;
  advMinSize: number;
  advRooms: number;

  constructor(private filterService: AdvertisementFilterService, private rentadService: RentadserviceService) {
   }


  ngOnInit() {
  }


  generateUrl(): String{
    var searchParams:string[]; 
    searchParams = [];
    this.url = "";
    if(this.advCity != null && this.advCity != undefined && this.advCity != ""){
      var stringurl = "city:"+this.advCity;
      searchParams.push(stringurl);
    }
    if(this.advCountry != null && this.advCountry != undefined && this.advCountry != ""){
      var stringurl = "country:"+this.advCountry;
      searchParams.push(stringurl);
    }
    if(this.advMaxCost != null && this.advMaxCost != undefined){
      var stringurl = "cost<"+this.advMaxCost;
      searchParams.push(stringurl);
    }
    if(this.advMinSize != null && this.advMinSize != undefined){
      var stringurl = "size>"+this.advMinSize;
      searchParams.push(stringurl);
    }
    if(this.advRooms != null && this.advRooms != undefined){
      var stringurl = "roomsAvailable>"+this.advRooms;
      searchParams.push(stringurl);
    }




    for(var i = 0; i < searchParams.length; i++){
      if(i == searchParams.length-1){
        this.url = this.url+searchParams[i];
      }
      else{
        this.url = this.url+searchParams[i]+",";
      }
    }
    
    return this.url;
  }

  onSearchButtonClicked(){
    this.filterService.setUrl(this.generateUrl());
  }
}
