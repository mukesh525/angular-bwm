import { Component, OnInit } from '@angular/core';
import {RentalService} from '../shared/rental.service'
import {Rental} from '../shared/rental.modal'

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})
export class RentalListComponent implements OnInit {
  rentals:Rental[]= []
  constructor(private rentalService:RentalService) { }

   ngOnInit() {
  
   const rentalObserable = this.rentalService.getRentals();
   rentalObserable.subscribe(
     (rentals:Rental[]) =>{
       this.rentals=rentals;

     },
     (err) =>{

     },
     () =>{

      }
     );
  }

}
