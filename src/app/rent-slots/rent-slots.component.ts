import { Component, OnInit, Input } from '@angular/core';
import { RentSlotsService } from '../rent-slots.service';
import { RentSlot } from '../rentslot';
import { AuthService } from '../auth.service';
import { User } from '../user';
import { MatchserviceService } from '../matchservice.service';
import { Match } from '../match';


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
  matches$: Match[] = [];

  constructor(private rentSlot: RentSlotsService,private authService: AuthService,private match: MatchserviceService) { }

  ngOnInit() {
    this.rentSlot.getSlots(this.rentAdId).subscribe(rentSlots => this.rentSlots = rentSlots.sort((a,b) => a.id - b.id));
    this.authService.getAuth().subscribe(user => this.user = user);
    
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

  leaveSlotButtonClick(slot: RentSlot) {
    this.rentSlot.leaveSlot(slot.id,slot.renter.id).subscribe(() => {
      this.showError = false;
      this.leaveSlotUpdate(slot);
    }, 
    resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
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

  leaveSlotUpdate(slot: RentSlot) {
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

  inviteUserToSlotButtonClick(slot: RentSlot) {
    const matchlist = document.getElementById('matchlist' + slot.id);
    this.match.getMatches(this.user.id).subscribe(matches => {
      this.matches$ = matches;
      matchlist.classList.remove('hidden');
    });
  }

  onInvitableMatchSelectClick(slot: RentSlot,userId: number) {
    this.rentSlot.inviteSlot(slot.id,userId).subscribe(() => {
      this.showError = false; 
      this.showOptions(slot.id);
    }, 
    resp => {
      if (resp.error) {
        this.showError = true;
        this.errorMessage = resp.error.message;
      }
    });
  }

}
