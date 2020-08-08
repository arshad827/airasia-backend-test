import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToOne } from "typeorm"
import { Reservation } from "./reservation.entity";
import { Customer } from "./cutomer.entity";
import { Hotel } from "./hotel.entity";

@Entity()
export class ReservationRoom {
    @PrimaryGeneratedColumn()
    id: number;

    // assuming one customer can have multiple reservations
    @ManyToOne(type => Hotel, hotel => hotel.reservedRoom)
    hotel: Hotel;
    
    @ManyToOne(type => Reservation, room => room.reservationRoom)
    hotelReservation: Reservation
} 