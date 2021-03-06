import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PaypalService {

  constructor(private http: HttpClient) { }

  makePayment(rentId) {
    return this.http.post('api/paypal/make/payment?rentId='+ rentId, {});
  }

  completePayment(paymentId, payerId) {
    return this.http.post('api/paypal/complete/payment?paymentId=' + paymentId + '&PayerID=' + payerId ,null)
  }

}
