import {Rental} from '../../rental/shared/rental.modal'
export class Booking {
    static readonly DATE_FORMAT='YYYY/MM/DD';
    _id:string;
    startAt:string;
    endAt:string;
    totalPrice:number;
    guests:string;
    days:number;
    createdAt:number;
    rental:Rental;
}