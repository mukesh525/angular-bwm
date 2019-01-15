import {Injectable} from '@angular/core'
import { Observable, from } from 'rxjs';
import {Rental} from './rental.modal';
import {HttpClient} from '@angular/common/http';
@Injectable()
export class RentalService {

constructor(private http:HttpClient){}

public getRentalsById(rentalID:string):Observable<Rental> {
  return <Observable<Rental>> this.http.get('/api/v1/rentals/'+rentalID);
}

public getRentals(): Observable<Rental[]>{
  return <Observable<Rental[]>> this.http.get('/api/v1/rentals/');
}


}