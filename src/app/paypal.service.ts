import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) { }

  makePayment(sum) {
    return this.http.post('api/paypal/make/payment?sum='+sum, {});
  }

  completePayment(paymentId, payerId) {
    return this.http.post('api/paypal/complete/payment?paymentId=' + paymentId + '&PayerID=' + payerId ,null)
  }

}
