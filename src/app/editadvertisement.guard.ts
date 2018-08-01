import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route, ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Advertisement } from './advertisement';
import { AuthService } from './auth.service';
import { RentadserviceService } from './rentadservice.service';

@Injectable({
  providedIn: 'root'
})
export class EditadvertisementGuard implements CanLoad {
  rentAd: Advertisement;
  constructor(private route:ActivatedRoute, private auth: AuthService, private adService: RentadserviceService) {
    this.route.params.subscribe(params => this.rentAd.id = params.id);
  }
  userAds = [];
  canLoad(): boolean {
    return this.canEdit(this.rentAd.id);
  }
  canEdit(adid): boolean{
    //this.auth.getAuth().;
    //return this.adService.getUserAds().map(x => x.find(o => o.id == adid));  
    let editable = false;
    this.adService.getUserAds()
    .subscribe(
    (response) => {
      this.userAds = response;
      //orderExists will be true if there are any with whateverOrderId you want to check for
      editable = response.some(x => x.id === adid);
    });
    return editable;
  }

}
