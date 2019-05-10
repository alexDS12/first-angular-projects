class Student {
    fullName: string;
    age: number;

    constructor(public firstName: string, public middleInitial: string, public lastName: string, age: number) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.age = age;
    }
}

interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

function checkIfAdult(person: {age: number}) { //another way to use interface
    if(person.age < 18) {
        return "Still a kid";
    }
    else {
        return "Grown up";
    }
}

let user = new Student("Jane", "M", "User", 20);

console.log(greeter(user));

console.log(checkIfAdult(user));