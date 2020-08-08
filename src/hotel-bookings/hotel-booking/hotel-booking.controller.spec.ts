import { Test, TestingModule } from '@nestjs/testing';
import { HotelBookingController } from './hotel-booking.controller';
import { HotelService } from '../hotel-service';
import { MockService } from './hotel-service.mock';

describe('HotelBooking Controller', () => {
  let controller: HotelBookingController;
  let service: HotelService
  const ApiServiceProvider = {
    provide: HotelService,
    useClass: MockService,
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HotelBookingController],
      providers: [ApiServiceProvider]
    }).compile();

    controller = module.get<HotelBookingController>(HotelBookingController);
  });

  //mocked Data
  const mockedData = {
    "customer": {
      "name": "Arshad Shaikh",
      "email": "arshadshaikh827@gmail.com",
      "number": "+872873612"
    },
    "reservation": {
      "reservationDate": "2019-03-13",
      "clockInDate": "2019-03-13",
      "clockOutDate": "2019-03-13",
      "hotelId": "64728af4-3e59-4429-a3d8-8eb78e4f4836",
      "roomNo": [
        "S23"
      ]
    }
  }

  it('should be defined', async () => {
    // Create order will call mocked service that we have used in the oproviders
    const response = await controller.CreatOrder(mockedData)
    expect(response.status).toBe(1001);        
    expect(controller).toBeDefined();
  });
});
