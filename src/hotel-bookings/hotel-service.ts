import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Hotel } from './models/hotel.entity';
import { Repository } from 'typeorm';
import { Room } from './models/room.entity';
import { Reservation } from './models/reservation.entity';
import { Customer } from './models/cutomer.entity';
import { ReservationRoom } from './models/reservationRooms.entity';
@Injectable()

export class HotelService {

    constructor(
        @InjectRepository(Hotel) private hotelRepository?: Repository<Hotel>,
        @InjectRepository(Room) private roomRepository?: Repository<Room>,
        @InjectRepository(Reservation) private reservationRepository?: Repository<Reservation>,
        @InjectRepository(Customer) private customerRepository?: Repository<Customer>,
        @InjectRepository(ReservationRoom) private reservationRoom?: Repository<ReservationRoom>) { }


    /**
     * CrateOrder Logic: Assuming that hotels we already have in the database
     * we firt check the customer if it exists or not
     * check for hotelId there in the payload or not
     * reserve that hotel and get a reservation Id of that Hotel (Normalizing)
     * save all the rooms with hotelId and hotelreservationId
     * reseve the room with the hotelReservation ID in an Normalized way
     * please look at the screenshot attached(table_structure.png).
     */

    async createOrder(data): Promise<any> {

        // check if customer exists
        let customer;

        customer = await this.customerRepository.findOne({
            where: {
                email: data.customer.email
            }
        })
        if (!customer) {
            console.log('---->', customer)
            customer = await this.customerRepository.save(data.customer);
            console.log('new Customer', customer)
        }

        let hotelReservationId;
        if (data.reservation.hotelId) {
            // Save Hotel Reservation
            hotelReservationId = await this.reservationRepository.save({
                customer: customer,
                reservationDate: data.reservation.reservationDate,
                clockInDate: data.reservation.clockInDate,
                clockOutDate: data.reservation.clockOutDate,
                hotelId: data.reservation.hotelId
            });
        } else {
            return {
                status: 400,
                message: 'Please select a hotel/hotelId cannot be empty',
            }
        }

        let savedRoomsId: Array<{}> = [];

        // Save rooms 
        data.reservation.roomNo.forEach(async element => {
            const roomId = await this.roomRepository.save({
                status: "Available",
                roomNo: element,
                hotelId: data.reservation.hotelId,
                reservation: hotelReservationId

            })
            savedRoomsId.push(roomId)
        });

        // Save rooms Reservation
        let reservedRooms = await this.reservationRoom.save({
            hotel: data.reservation.hotelId,
            hotelReservation: hotelReservationId
        });

        const hotelData = await this.hotelRepository.findOne({ where: { id: data.reservation.hotelId } })
        reservedRooms.hotel = hotelData;

        return {
            status: 200,
            message: 'Added Successfuly!',
            response: reservedRooms
        }
    }
}