import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Room } from "./room.entity";
import { ReservationRoom } from "./reservationRooms.entity";

@Entity()
export class Hotel {

    @PrimaryGeneratedColumn("uuid")
    id: number

    @Column()
    name: string

    // assuming One hotel will have multiple  multiple rooms
    @OneToMany(type => Room, HotelRoom => HotelRoom.hotel)
    rooms: Room[];

    // assuming One hotel will have multiple  multiple rooms reservation
    @OneToMany(type => ReservationRoom, hotel => hotel.hotelReservation)
    reservedRoom: ReservationRoom[];

    @Column({ default: true })
    isActive: boolean;
}