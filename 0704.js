const car = {
    name : "모닝",
    year : "2024"
}

const person = {
    name: "yonugin",
    age: 20,
    drive(){
        //car.drive();
        console.log("I'm driving now");
    },
    //address : CountQueuingStrategy.getAddress()
}

const city = {
    location : "대한민국",
    latitude : 35.8,
    longitude : 128.6
}

const zookeeper = {
    ...car.name
}

let person2 = "youngjin";
let car2 = "모닝";

person.drive(car);
//person.takeoff();