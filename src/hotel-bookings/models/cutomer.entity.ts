import { Entity, PrimaryGeneratedColumn, Column, OneToOne, OneToMany } from "typeorm"
import { Reservation } from "./reservation.entity"
import { ReservationRoom } from "./reservationRooms.entity"

@Entity()
export class Customer {
    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name:string
    @Column()

    @Column()
    email:string

    @Column()
    number:string

    // assuming one customer can have multiple reservations
    @OneToMany(type => Reservation, reservation => reservation.customer)
    reservation: Reservation;    
}