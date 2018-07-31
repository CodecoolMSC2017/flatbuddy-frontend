import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Advertisement } from './advertisement';


@Injectable({
  providedIn: 'root'
})
export class RentadserviceService {

  constructor(private http: HttpClient) { }

  getAds(): Observable<Advertisement[]>{
    return this.http.get<Advertisement[]>('/api/user/advertisements');
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
