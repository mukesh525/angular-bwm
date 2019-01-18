import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{Routes,RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header/header.component';
import {RentalModule} from './rental/rental.module';
import {AuthModule} from './auth/auth.module';
import { RentalDetailBookingComponent } from './rental/rental-detail/rental-detail-booking/rental-detail-booking.component';

const routes:Routes =[
  {path:'',redirectTo:'/rentals',pathMatch:'full'}
  // {path:'temp',component:TempComponent}
]



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
   
  ],
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule,
    AppRoutingModule,
    RentalModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
