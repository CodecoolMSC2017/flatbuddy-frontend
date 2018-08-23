import { Component, OnInit, Input } from '@angular/core';
import { MatchserviceService } from '../matchservice.service';
import { RentSlotsService } from '../rent-slots.service';
import { AuthService } from '../auth.service';
import { RentSlot } from '../rentslot';
import { User } from '../user';
import { Match } from '../match';

@Component({
  selector: 'app-rentslotsedit',
  templateUrl: './rentslotsedit.component.html',
  styleUrls: ['./rentslotsedit.component.css','../rent-slots/rent-slots.component.css']
})
export class RentslotseditComponent implements OnInit {

  @Input() rentAdId: any;

  rentSlots: RentSlot[] = [];

  showError: boolean = false;
  errorMessage: String;
  user: User = new User();

  constructor(private rentSlot: RentSlotsService,private authService: AuthService,private match: MatchserviceService) { }

  ngOnInit() {
    this.rentSlot.getSlots(this.rentAdId).subscribe(rentSlots => this.rentSlots = rentSlots.sort((a,b) => a.id - b.id));
    this.authService.getAuth().subscribe(user => this.user = user);
  }

  kickUserFromSlotButtonClick(slot: RentSlot) {
    this.rentSlot.kickUserFromSlot(slot.id,slot.renter.id).subscribe(() => {
      this.showError = false;
      this.kickUserFromSlotUpdate(slot);
    }, 
    resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
      }
    });
  }

  kickUserFromSlotUpdate(slot: RentSlot) {
    const index:number = this.rentSlots.indexOf(slot);
    this.rentSlots[index].renter = null;
  }

  showOptions(slotId) {
    const list = document.getElementById('slotoptions'+slotId);
    if (list.className.includes('hidden')) {
      list.classList.remove('hidden');
    }
    else {
      list.classList.add('hidden');
    }
  }

  joinSlotButtonClick(slot: RentSlot) {
    this.rentSlot.joinSlot(slot.id).subscribe(() => {
      this.showError = false; 
      this.joinSlotUpdate(slot);
    }, 
    resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
        this.showOptions(slot.id);
      }
    });
  }

  joinSlotUpdate(slot: RentSlot) {
    this.authService.getAuth().subscribe((user) => {
      this.user = user;
      const index:number = this.rentSlots.indexOf(slot);
      this.rentSlots[index].renter = this.user;
    });
  }
  leaveSlotButtonClick(slot: RentSlot) {
    this.rentSlot.leaveSlot(slot.id,slot.renter.id).subscribe(() => {
      this.showError = false;
      this.kickUserFromSlotUpdate(slot);
    }, 
    resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
      }
    });
  }

}
