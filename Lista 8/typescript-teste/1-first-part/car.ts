class Car {
    //attributes
    model: string;
    owner: string;
    country: string;
    year: string;

    //constructor
    constructor(model: string, owner: string, country: string, year: string) {
        this.model = model;
        this.owner = owner;
        this.country = country;
        this.year = year;
    }

    //function
    carInfo() {
        return "Model: " + this.model + "\nOwner: " + this.owner + "\nCountry: " + this.country + "\nYear: " + this.year;
    }
}

let car = new Car("Fiesta", "Alex", "Brazil", "2019");

console.log(car.carInfo());