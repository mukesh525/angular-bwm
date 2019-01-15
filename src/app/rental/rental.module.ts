import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {UpperCasePipe}  from '../common/pipes/uppercase.pipes'


import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import {RentalService} from './shared/rental.service';
import { RentaldetailComponent } from './rentaldetail/rentaldetail.component';

const routes:Routes =[
    { 
      path:'rentals',
      component:RentalComponent,
      children:[
       {path:'',component:RentalListComponent},
       {path:':rentalID',component:RentaldetailComponent}
      ]
    }
  ]
@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentaldetailComponent,
        UpperCasePipe
    ],
    imports:[
        CommonModule,
        HttpClientModule,
        NgPipesModule,
        RouterModule.forChild(routes)
          
    ],
    providers:[RentalService]
})
export class RentalModule{}