import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import {Rental} from './rental.modal'
@Injectable()
export class RentalService {
 private rentals:Rental[]= [
    {
        id:'1',
        title:"Central Apartment",
        city:"New York",
        street:"Times Square",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"Very nice apartment",
        dailyRate:34,
        shared:false,
        createdAt:"24/12/2017",
        category:"Apartment"
      },
      {
        id:"2",
        title:"Central Apartment",
        city:"Kolkata",
        street:"Ballygunj",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"Very nice apartment",
        dailyRate:39,
        shared:false,
        createdAt:"24/12/2017",
        category:"Apartment"
      },
      {
        id:"3",
        title:"Central Apartment",
        city:"Banmgalore",
        street:"Kundanhalli",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"Very nice apartment",
        dailyRate:54,
        shared:false,
        createdAt:"24/12/2017",
        category:"Apartment"
      },
      {
        id:"4",
        title:"Central Apartment",
        city:"New York",
        street:"Times Square",
        image:"http://via.placeholder.com/350x250",
        bedrooms:3,
        description:"Very nice apartment",
        dailyRate:34,
        shared:false,
        createdAt:"24/12/2017",
        category:"Apartment"
      }
 ]

public getRentalsById(rentalID:string):Observable<Rental> {
   return new Observable<Rental>((observable)=>{
    setTimeout(()=>{
      const foundrental=  this.rentals.find((rental)=>{
        return rental.id == rentalID
     })
     observable.next(foundrental)
     
    },500);


    setTimeout(()=>{
      observable.error("I AM ERROR")
    },2000);


    setTimeout(()=>{
      observable.complete();
    },3000);

  });
}

public getRentals(): Observable<Rental[]>{
  return  new Observable<Rental[]>((observable)=>{
    setTimeout(()=>{
      observable.next(this.rentals)
    },1000);
 });
  
}


}