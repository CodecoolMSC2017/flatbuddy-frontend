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

  showError: boolean = false;
  errorMessage: string;

  constructor(private newAdService: NewAdvertisementService, private router: Router) { }

  ngOnInit() {
  }
  createNewAd(){
    const fieldsComplete = this.checkFields();
    if (!fieldsComplete) {
      this.newAdService.createNewAd(this.advertisement).subscribe(() => {
        this.router.navigate(['advertisements']);
    },
      (error) => {
        this.showError = true;
        this.errorMessage = error.error.message;
    });
  }
}
  private checkFields(): boolean {
    const result = !this.advertisement.city || this.advertisement.cost < 1 || 
    !this.advertisement.country || !this.advertisement.description || this.advertisement.size < 1 ||
    !this.advertisement.state || !this.advertisement.street || !this.advertisement.type || !this.advertisement.zipCode;

    if (result) {
      this.showError = true;
      this.errorMessage = "Please fill out each inputs!";
      return result;
    }
  }

}
