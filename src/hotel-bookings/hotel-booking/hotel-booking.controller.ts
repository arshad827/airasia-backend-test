import { Controller, Body, Post } from '@nestjs/common';

// Hotel Service
import { HotelService } from '../hotel-service';

@Controller('hotel-booking')

/**
 * A unit test hasbeen implemented on the hotel-booking controller, file (hotel-booking.controller.spec.ts)
*/
export class HotelBookingController {

    // injected Hotel Service
    constructor(private hotelService: HotelService) { }

    /**
     * the endpoint of this API will be ---- hotel-booking/createOrder
    */
    @Post('createOrder')
    async CreatOrder(
        @Body() data: Record<string, unknown>): Promise<any> {
        if (data) {
            return this.hotelService.createOrder(data);
        } else {
            return {
                status: 400,
                message: 'Payload cannot be empty',
            }
        }
    }
}
