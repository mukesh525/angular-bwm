import { Booking } from 'src/app/booking/shared/booking.model';

export class Rental {
    static readonly CATEGORIES = ['house', 'apartment', 'condo'];

    _id:string;
    title:string;
    city:string;
    street:string;
    category:string;
    image:string;
    bedrooms:number;
    description:string;
    shared:boolean;
    dailyRate:number;
    createdAt:string;
    bookings:Booking[];
}
