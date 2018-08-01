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

  getUserAds(): Observable<Advertisement[]> {
    return this.http.get<Advertisement[]>('/api/user/myadvertisements');
  }

  getUserAdById(rentAdId) {
    return this.http.get('/api/user/myadvertisement/'+rentAdId);
  }

  updateAdvertisement(rentAd): Observable<void> {
    return this.http.post<void>('/api/user/advertisement/update', {
    id: rentAd.id,
    country: rentAd.country,
    state: rentAd.state,
    city: rentAd.city,
    zipCode: rentAd.zipCode,
    district: rentAd.district,
    street: rentAd.street,
    description: rentAd.description,
    cost: +rentAd.cost,
    size: +rentAd.size,
    type: rentAd.type,
    roomsAvailable: +rentAd.roomsAvailable,
    furnitured: rentAd.furnitured
    });
  }
}
