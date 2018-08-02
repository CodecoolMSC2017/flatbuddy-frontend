import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { RentSlot } from './rentslot';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RentSlotsService {

  constructor(private http: HttpClient) { }

  getSlots(id): Observable<RentSlot[]>{
    return this.http.get<RentSlot[]>('/api/user/advertisementslots/' + id);
  }

  joinSlot(id): Observable<any>{
    return this.http.put('/api/user/advertisementslots/join/'+id,null);
  }

  leaveSlot(id,renterId): Observable<any>{
    return this.http.put('/api/user/advertisementslots/leave/'+id + '/' + renterId,null);
  }
}
