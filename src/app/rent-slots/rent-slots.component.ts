import { Component, OnInit, Input } from '@angular/core';
import { RentSlotsService } from '../rent-slots.service';
import { RentSlot } from '../rentslot';
import { AuthService } from '../auth.service';
import { User } from '../user';


@Component({
  selector: 'app-rent-slots',
  templateUrl: './rent-slots.component.html',
  styleUrls: ['./rent-slots.component.css']
})
export class RentSlotsComponent implements OnInit {

  @Input() rentAdId: any;

  rentSlots: RentSlot[] = [];

  showError: boolean = false;
  errorMessage: String;
  user: User = new User();

  constructor(private rentSlot: RentSlotsService,private authService: AuthService) { }

  ngOnInit() {
    this.rentSlot.getSlots(this.rentAdId).subscribe(rentSlots => this.rentSlots = rentSlots.sort((a,b) => a.id - b.id));
  }

  joinSlotButtonClick(slot: RentSlot) {
    this.rentSlot.joinSlot(slot.id).subscribe(() => {this.showError = false;}, resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
      }
    });
    this.updateSlot(slot);
  }

  updateSlot(slot: RentSlot) {
    this.authService.getAuth().subscribe(user => this.user = user);
    const index:number = this.rentSlots.indexOf(slot);
    this.rentSlots[index].renter = this.user;
  }

}
