import { Component, OnInit, Input } from '@angular/core';
import { RentadserviceService } from '../rentadservice.service';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  @Input() rentAdId2: any;
  rentAd: any;
  public selectedImage: String;
  public pictures: any[];
  
  constructor(private rentads:RentadserviceService) { 
  }

  ngOnInit() { 
    this.rentads.getAdById(this.rentAdId2).subscribe(rentads => { 
    this.rentAd = rentads;
    this.selectedImage = this.rentAd.adPictures[0].path;
    this.pictures = this.rentAd.adPictures;
  });
  }
  changePic(event){
    let index = event.target.src.lastIndexOf('/');
    let newSrc=event.target.src.slice(index+1);
    this.selectedImage = newSrc;
  }

}
