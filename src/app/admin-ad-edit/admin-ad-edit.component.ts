import { Component, OnInit } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-ad-edit',
  templateUrl: './admin-ad-edit.component.html',
  styleUrls: ['../advertisement-edit/advertisement-edit.component.css']
})
export class AdminAdEditComponent implements OnInit {

  selectedAd: number;
  showError: boolean = false;
  errorMessage: string;
  rentAd:any;
  pictures: Object[] = [];
  active:boolean;

  constructor(private adService: RentadserviceService, private route: ActivatedRoute, private router: Router) { 
    this.route.params.subscribe(params => {this.rentAd = params.id
      this.selectedAd = this.rentAd;
      });
    
  }

  ngOnInit() {
    this.adService.getAdById(this.rentAd)
      .subscribe(
        rentads => {this.rentAd = rentads,
        this.pictures = this.rentAd.adPictures,
        this.active = this.rentAd.enabled},
        (error) => {
          this.router.navigate(['advertisements']);
        });
    
  }

  editAdvertisement(){

    this.adService.updateAdvertisement(this.rentAd).subscribe(() => {this.router.navigate(["advertisements"]);}, 
    (error)=>{
      this.showError = true;
      this.errorMessage = error.error.message;
    });
  }

  onDeleteButtonClick(picture) {
    const index: number = this.pictures.indexOf(picture);
    this.adService.deletePicture(picture.id).subscribe(this.pictures.splice(index,1));
  }

}
