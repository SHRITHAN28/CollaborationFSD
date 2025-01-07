/*In JavaScript, every object has a prototype. Create an object car with 
properties like make, model, and year. Then, add a method getDetails() to 
the car object that returns the car's details as a string. 
Using prototypal inheritance, create a new object electricCar that inherits 
from car, with an additional property batteryCapacity. Add a method 
getBatteryInfo() to electricCar that returns the battery capacity.  */
const car = 
{
    make: "Toyota",
    model: "Corolla",
    year: 2020,
    getDetails() {
        return `${this.make} ${this.model}, Year: ${this.year}`;
    }
};
const electricCar = Object.create(car);
electricCar.batteryCapacity = "100kWh";
electricCar.getBatteryInfo = function () 
{
    return `Battery Capacity: ${this.batteryCapacity}`;
};
console.log(electricCar.getDetails());
console.log(electricCar.getBatteryInfo());