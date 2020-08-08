import { Customer } from "./cutomer.entity";
import { Entity, PrimaryGeneratedColumn, OneToOne, Column, ManyToOne, OneToMany } from "typeorm"

import { Hotel } from "./hotel.entity";
import { Room } from "./room.entity";
import { ReservationRoom } from "./reservationRooms.entity";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn("uuid")
    id: number;

    @OneToMany(() => Room, room => room.reservation)
    room: Room

    // assuming one customer can have multiple reservations
    @ManyToOne(type => Customer, customer => customer.reservation)
    customer: Customer;

    // assuming One Hotel reservation will have multiple Room reservation by a single user.
    @OneToMany(type => ReservationRoom, room => room.hotelReservation)
    reservationRoom: ReservationRoom


    @Column({ type: "varchar" })
    hotelId: Hotel

    @Column({ type: "datetime" })
    reservationDate: Date;

    @Column({ type: "datetime" })
    clockInDate: Date

    @Column({ type: "datetime" })
    clockOutDate: Date


}