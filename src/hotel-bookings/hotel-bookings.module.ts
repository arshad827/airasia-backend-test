import { Module } from '@nestjs/common';

// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';
import { HotelService } from './hotel-service';
import { Hotel } from './models/hotel.entity';
import { Room } from './models/room.entity';
import { Reservation } from './models/reservation.entity';
import { Customer } from './models/cutomer.entity';
import { HotelBookingController } from './hotel-booking/hotel-booking.controller';
import { ReservationRoom } from './models/reservationRooms.entity';
@Module({
    imports: [TypeOrmModule.forFeature([Hotel, Room, Reservation, Customer, ReservationRoom])],
    providers:[HotelService],
    controllers: [HotelBookingController] 
})
export class HotelBookingsModule { }
