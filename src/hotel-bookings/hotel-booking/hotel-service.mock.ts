// mock the Hotel service
export class MockService {
    createOrder() {
        return {
            "status": 1001,
            "message": "Added Successfuly!",
            "response": {
                "hotel": {
                    "id": "64728af4-3e59-4429-a3d8-8eb78e4f4836",
                    "name": "TAJHotel",
                    "isActive": true
                },
                "hotelReservation": {
                    "customer": {
                        "id": "003682e2-3e27-4074-94ab-97dc902cdd6c",
                        "name": "Arshad Shaikh",
                        "email": "arshadshaikh827@gmail.com",
                        "number": "+872873612"
                    },
                    "reservationDate": "2019-03-13",
                    "clockInDate": "2019-03-13",
                    "clockOutDate": "2019-03-13",
                    "hotelId": "64728af4-3e59-4429-a3d8-8eb78e4f4836",
                    "id": "c9f1ed05-717d-4001-aa8a-b8e43cc8e6c3"
                },
                "id": 8
            }
        }
    }
}