import { Component, OnInit } from '@angular/core';
import { Advertisement } from '../advertisement';
import { NewAdvertisementService } from '../new-advertisement.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-advertisement',
  templateUrl: './new-advertisement.component.html',
  styleUrls: ['./new-advertisement.component.css']
})
export class NewAdvertisementComponent implements OnInit {

  advertisement: Advertisement = new Advertisement;
  constructor(private newAdService: NewAdvertisementService, private router: Router) { }

  ngOnInit() {
  }
  createNewAd(){
    this.newAdService.createNewAd(this.advertisement).subscribe(() => {
      this.router.navigate(['advertisements']);
    });
  }

}
