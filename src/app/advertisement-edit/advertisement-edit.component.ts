import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PaypalService } from '../paypal.service';

@Component({
  selector: 'app-advertisement-edit',
  templateUrl: './advertisement-edit.component.html',
  styleUrls: ['./advertisement-edit.component.css']
})
export class AdvertisementEditComponent implements OnInit {

  selectedAd: number;
  showError: boolean = false;
  errorMessage: string;
  rentAd:any;
  pictures: Object[] = [];
  active:boolean;

  constructor(private adService: RentadserviceService, private route: ActivatedRoute, private router: Router, private paypal: PaypalService) { 
    this.route.params.subscribe(params => {this.rentAd = params.id
      this.selectedAd = this.rentAd;
      });
    
  }

  ngOnInit() {
    this.adService.getMyAdById(this.selectedAd)
      .subscribe(
        rentads => {this.rentAd = rentads,
        this.pictures = this.rentAd.adPictures,
        this.active = this.rentAd.enabled},
        (error) => {
          this.router.navigate(['advertisements']);
        });
    
  }

  editAdvertisement(){

    this.adService.updateAdvertisement(this.rentAd).subscribe(() => {this.router.navigate(["myadvertisements"]);}, 
    (error)=>{
      this.showError = true;
      this.errorMessage = error.error.message;
    });
  }

  onFileChanged(event) {
    this.adService.selectedFile= event.target.files[0];
    this.onUpload();
  }

  onUpload() {
    this.adService.uploadPicture(this.rentAd.id).subscribe(()=>{this.ngOnInit()},(error) => {
      this.showError = true;
      this.errorMessage = error.error.message;
    });
  }

  onDeleteButtonClick(picture) {
    const index: number = this.pictures.indexOf(picture);
    this.adService.deletePicture(picture.id).subscribe(this.pictures.splice(index,1));
  }

  onPaypalButtonClick(){
    this.paypal.makePayment(this.selectedAd).subscribe((resp: any) => {
        window.location.href= resp.redirect_url;
    });
  }

  onSetAdVisibilityClick(adId) {
    this.adService.setAdVisibility(adId).subscribe(() => {
      if(this.active) {
        this.active = false;
      }
      else {
        this.active = true;
      }
    });
  }
}
