import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PaypalService } from '../paypal.service';

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit {
  paymentId: string;
  payerId: string

  constructor(private route: ActivatedRoute, private paypal: PaypalService) {
    this.route.queryParams.subscribe(params => {
      this.paymentId = params['paymentId'];
      this.payerId = params['PayerID'];
      console.log(this.paymentId+" "+this.payerId);
    });
   }

  ngOnInit() {
    this.paypal.completePayment(this.paymentId,this.payerId).subscribe();
  }

}
