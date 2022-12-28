const hotelRomms = [
    {
        "roomTypeId": 7,
        "roomTypeName": "Executive Deluxe",
        "availableRooms": 4,
        "bookedRooms": 0,
        "reservedRooms": 0,
        "roomCost": 19500,
        "discountRate": true,
        "discountPrice": 18525,
        "showStripAmount": 5
    },
    {
        "roomTypeId": 9,
        "roomTypeName": "Residency Deluxe",
        "availableRooms": 32,
        "bookedRooms": 0,
        "reservedRooms": 0,
        "roomCost": 18000,
        "discountRate": false,
        "discountPrice": 17100,
        "showStripAmount": 5
    },
    {
        "roomTypeId": 10,
        "roomTypeName": "Residency Suite",
        "availableRooms": 7,
        "bookedRooms": 0,
        "reservedRooms": 0,
        "roomCost": 22000,
        "discountRate": true,
        "discountPrice": 20900,
        "showStripAmount": 5
    },
    {
        "roomTypeId": 32,
        "roomTypeName": "Executive Suite",
        "availableRooms": 3,
        "bookedRooms": 0,
        "reservedRooms": 0,
        "roomCost": 32000,
        "discountRate": true,
        "discountPrice": 30400,
        "showStripAmount": 5
    },
    {
        "roomTypeId": 8,
        "roomTypeName": "Presidential Suite",
        "availableRooms": 0,
        "bookedRooms": 0,
        "reservedRooms": 0,
        "roomCost": 47000,
        "discountRate": false,
        "discountPrice": 44650,
        "showStripAmount": 5
    }
];
 //Question 1: Given the hotelRooms data display only room type with discountRate equals false

 const discountFalseRoom = hotelRomms.filter(rate => rate.discountRate);
 console.log('discounted false rooms are: ',discountFalseRoom);

/*
//Question 2: Use hotelRooms data display only rooms type with roomCost less than 20k
 const roomC = hotelRomms.forEach(cost =>{
    if(cost.roomCost < 20000){
        console.log(cost);
    }
 })
 

 //Question 3: Use hotelRooms data display only rooms type with roomTypeName and availableRooms for Example: hotelRoom: [ { "roomTypeName": "Executive Deluxe", "availableRooms": 4, }, { "roomTypeName": "Residency Suite", "availableRooms": 7, } ... ]

 const roomDetails = hotelRomms.forEach(roomDetails => {
    console.log(roomDetails.roomTypeName, roomDetails.availableRooms);
 });


 //Question 4: Sum the avaliable rooms in the hotel

 const availableRoomsSumation = hotelRomms.reduce((a, b) =>{
    return a + b.availableRooms;
 },0)
 console.log(availableRoomsSumation);
*/

//Question 3: Use hotelRooms data display only rooms type with roomTypeName and availableRooms for Example: hotelRoom: [ { "roomTypeName": "Executive Deluxe", "availableRooms": 4, }, { "roomTypeName": "Residency Suite", "availableRooms": 7, } ... ]

const roomDetails = hotelRomms.forEach(roomDetails => {
    console.log(roomDetails.roomTypeName, roomDetails.availableRooms);
 });