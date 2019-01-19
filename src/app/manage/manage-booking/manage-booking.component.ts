import { Component, OnInit } from '@angular/core';
import { Booking } from 'src/app/booking/shared/booking.model';
import { BookingService } from 'src/app/booking/shared/booking.service';

@Component({
  selector: 'bwm-manage-booking',
  templateUrl: './manage-booking.component.html',
  styleUrls: ['./manage-booking.component.scss']
})
export class ManageBookingComponent implements OnInit {

  bookings: Booking[];
  payments: any[];

  constructor(private bookingService: BookingService) { }

  ngOnInit() {
    this.bookingService.getUserBookings().subscribe(
      (bookings: Booking[]) => {
        this.bookings = bookings;
      },
      () => {

      })

  }


}
