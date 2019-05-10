var Car = /** @class */ (function () {
    //constructor
    function Car(model, owner, country, year) {
        this.model = model;
        this.owner = owner;
        this.country = country;
        this.year = year;
    }
    //function
    Car.prototype.carInfo = function () {
        return "Model: " + this.model + "\nOwner: " + this.owner + "\nCountry: " + this.country + "\nYear: " + this.year;
    };
    return Car;
}());
var car = new Car("Fiesta", "Alex", "Brazil", "2019");
console.log(car.carInfo());
