import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Advertisement } from './advertisement';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NewAdvertisementService {

  constructor(private http: HttpClient,private auth: AuthService) { }

  createNewAd(advertisement: Advertisement): Observable<void> {
    return this.http.post<void>('/api/user/advertisement',{
      country: advertisement.country,
      state: advertisement.state,
      city: advertisement.city,
      zipCode: advertisement.zipCode,
      district: advertisement.district,
      street: advertisement.street,
      description: advertisement.description,
      cost: advertisement.cost,
      size: advertisement.size,
      type: advertisement.type,
      furnitured: advertisement.isFurnitured,
      roomsAvailable: advertisement.roomsAvailable
    })
  }
}
