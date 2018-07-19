import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent implements OnInit {

  public selectedImage: String;
  public adPictures: string[] = ['https://content.ingatlanbazar.hu/static/property/images/1f/ee/f6/f6/1feef6f6-84a6-11e8-b1f6-005056b3506b/08646def-b952-4b06-8b04-b9c5f8c6522d_1024x768b.jpg',
  'https://content.ingatlanbazar.hu/static/property/images/1f/ee/f6/f6/1feef6f6-84a6-11e8-b1f6-005056b3506b/be540219-f417-4a3b-940a-de05002a79e7_1024x768b.jpg',
  'https://content.ingatlanbazar.hu/static/property/images/1f/ee/f6/f6/1feef6f6-84a6-11e8-b1f6-005056b3506b/90473cdc-86b6-4984-bf86-55e0a46a3e36_1024x768b.jpg'
]; 
  
  constructor() { 
    this.selectedImage = this.adPictures[0];
  }

  ngOnInit() {
  }
  changePic(event){
    this.selectedImage = event.target.src;
  }

}
