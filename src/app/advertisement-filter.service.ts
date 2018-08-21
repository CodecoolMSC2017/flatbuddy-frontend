import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdvertisementFilterService {

  generatedUrl = new Subject<string>();
  generatedUrlObs = this.generatedUrl.asObservable();
  constructor() {
    console.log('asdasd') 
  }

  setUrl(url: any){
    this.generatedUrl.next(url);
  }
}
