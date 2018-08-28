import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentadserviceService } from '../rentadservice.service';
import { User } from '../user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-rent-ad-details',
  templateUrl: './rent-ad-details.component.html',
  styleUrls: ['./rent-ad-details.component.css']
})
export class RentAdDetailsComponent implements OnInit {
  rentAd$: any = {};
  rentAdId: number;
  rentAdId2: number;
  user: User;
  error: String;
  active:boolean;
  confirm:boolean = false;

  constructor(private authService: AuthService,private route:ActivatedRoute, private rentads:RentadserviceService) { 
    this.route.params.subscribe(params => {
      this.rentAdId = params.id;
      this.rentAdId2 = params.id;
    });

  }

  ngOnInit() {
    this.rentads.getAdById(this.rentAdId).subscribe(rentads => { 
      this.rentAd$ = rentads;
      this.active = this.rentAd$.enabled;
      this.authService.getAuth().subscribe(user => this.user = user);
    },(error) => this.error = error.error.message);
  }

  onSetAdVisibilityClick(adId) {
    this.rentads.setAdVisibility(adId).subscribe(() => {
      if(this.active) {
        this.active = false;
      }
      else {
        this.active = true;
      }
    });
  }

  onDeleteAdButtonClick() {
    this.confirm=true;
  }

  onConfirmDeleteAdButtonClick(adId) {
    this.rentads.deleteAd(adId).subscribe();
  }

}
