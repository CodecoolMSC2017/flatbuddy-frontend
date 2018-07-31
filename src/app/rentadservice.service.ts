import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RentadserviceService {

  constructor(private http: HttpClient) { }

  getAds(){
    return this.http.get('/api/user/advertisements');
  }
  getAdById(rentAdId){
    return this.http.get('/api/user/advertisement/'+rentAdId);
  }

  getUserAds() {
    return this.http.get('/api/user/myadvertisements');
  }

  getUserAdById(rentAdId) {
    return this.http.get('/api/user/myadvertisement/'+rentAdId);
  }
}
