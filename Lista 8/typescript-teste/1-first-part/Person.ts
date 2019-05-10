export class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    info() {
        return "Name is: " + this.name + " and age: " + this.age;
    }
}

let person = new Person("Alex", 23);

console.log(person.info());