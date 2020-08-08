import { Column, Entity, PrimaryGeneratedColumn, ManyToMany, ManyToOne, OneToOne } from "typeorm"
import { Hotel } from "./hotel.entity"
import { Reservation } from "./reservation.entity"
import { Res } from "@nestjs/common";

@Entity()
export class Room {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    roomNo: string;


    @Column({
        type: "enum",
        enum: ["Available", "Booked"],        
        default: "Available"
    })
    status: string

    @Column()
    hotelId: string;

    @ManyToOne(type => Hotel, hotel => hotel.rooms)
    hotel: Hotel

    @ManyToOne(()=>Reservation, reservation=>reservation.room)
    reservation: Reservation
} 