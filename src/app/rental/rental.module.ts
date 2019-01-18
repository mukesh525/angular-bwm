import { NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import{Routes,RouterModule} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {NgPipesModule} from 'ngx-pipes';
import {UpperCasePipe}  from '../common/pipes/uppercase.pipes';
import {MapModule}  from '../common/map/map.module';
import {AuthGuard} from '../auth/shared/auth.guard';
import { Daterangepicker } from 'ng2-daterangepicker';



import { RentalListComponent } from './rental-list/rental-list.component';
import { RentalListItemComponent } from './rental-list-item/rental-list-item.component';
import { RentalComponent } from './rental.component';
import {RentalService} from './shared/rental.service';
import { RentaldetailComponent } from './rental-detail/rentaldetail.component';
import { RentalDetailBookingComponent } from './rental-detail/rental-detail-booking/rental-detail-booking.component';


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
        RouterModule.forChild(routes)
          
    ],
    providers:[RentalService]
})
export class RentalModule{}