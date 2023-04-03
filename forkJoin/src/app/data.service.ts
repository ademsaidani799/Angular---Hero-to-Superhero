import { Injectable } from '@angular/core';
import { forkJoin, observable, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getWidgetOneData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(23);
        observer.complete();
      }, 5000);
    });
  }

  getWidgetTwoData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(15);
        observer.complete();
      }, 1000);
    });
  }

  getWidgetThreeData() {
    return new Observable<number>((observer) => {
      setTimeout(() => {
        observer.next(41);
        observer.complete();
      }, 3000);
    });
  }

  getAllData(){
    let observableSchools = new Observable<number>((observer)=>{
      setTimeout(()=>{  
        observer.next(23);
        observer.complete();
      },5000)
    
     });let observableHospitals = new Observable<number>((observer)=>{
      setTimeout(()=>{  
        observer.next(15);
        observer.complete();
      },1000)
    
     });let observableBanks = new Observable<number>((observer)=>{
      setTimeout(()=>{  
        observer.next(41);
        observer.complete();
      },3000)
    
     });

     //now return all these observble in a forkJoin
     return forkJoin(observableBanks,observableHospitals,observableSchools);
  }
 

}
