import { Module } from '@nestjs/common';

// controller
import { AppController } from './app.controller';

// typeORM
import { TypeOrmModule } from '@nestjs/typeorm';

// hotel Booking Module
import { HotelBookingsModule } from './hotel-bookings/hotel-bookings.module';


/** 
 * Made a new module as Hotel reservation,
 * used Single CRUD Operation and Implemented Unit test on the CreateOrder Function.
 * Database name: airasia, please import the tables CSV in the root folder(airasia)
 */

@Module({
  imports: [
    // Using typeORM for MYSQL quering.
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1q2w3e',
      database: 'airasia',
      autoLoadEntities: true,
      entities: [],
      synchronize: true,
      logging: true
    }),
    HotelBookingsModule, //configured hotel booking module
  ],
  controllers: [AppController],
  providers: [],
 
})
export class AppModule { }
