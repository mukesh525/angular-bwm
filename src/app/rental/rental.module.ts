import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {MapModule}  from '../common/map/map.module';
import { Daterangepicker } from 'ng2-daterangepicker';

import {FormsModule} from '@angular/forms';



import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';

import { RentaldetailComponent } from './rental-detail/rentaldetail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';

import { HelperService } from '../common/service/helper.service';
import {RentalService} from './shared/rental.service';
import {UpperCasePipe}  from '../common/pipes/uppercase.pipes';
import { BookingService } from '../booking/shared/booking.service';


import {AuthGuard} from '../auth/shared/auth.guard';

const routes:Routes =[
    { 
      path:'rentals',
      component:RentalComponent,
      children:[
       {path:'',component:RentalListComponent},
       {path:':rentalID',component:RentaldetailComponent,canActivate:[AuthGuard]}
      ]
    }
  ]
@NgModule({
    declarations:[
        RentalListComponent,
        RentalListItemComponent,
        RentalComponent,
        RentaldetailComponent,
        UpperCasePipe,
        RentalDetailBookingComponent
    ],
    imports:[
        CommonModule,
        Daterangepicker,
        HttpClientModule,
        NgPipesModule,
        MapModule,
        FormsModule,
        RouterModule.forChild(routes)
          
    ],
    providers:[RentalService,HelperService,BookingService]
})
export class RentalModule{}