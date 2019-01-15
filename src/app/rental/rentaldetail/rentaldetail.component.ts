import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RentalService} from'../shared/rental.service'
import {Rental} from'../shared/rental.modal'

@Component({
  selector: 'bwm-rentaldetail',
  templateUrl: './rentaldetail.component.html',
  styleUrls: ['./rentaldetail.component.scss']
})
export class RentaldetailComponent implements OnInit {

  rental:Rental;
  constructor(private route:ActivatedRoute,private rentalService :RentalService) { }

  ngOnInit() {
   // this.rental = new Rental()
     this.route.params.subscribe((params)=>{
        this.getRental (params['rentalID'])

    })


  }


  getRental(rentId:string){
     this.rentalService.getRentalsById( rentId).subscribe(
       (rental:Rental) =>{
          this.rental=rental
       }
     )
  }

}
