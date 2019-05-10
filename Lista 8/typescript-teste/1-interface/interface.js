var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName, age) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
        this.age = age;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
function checkIfAdult(person) {
    if (person.age < 18) {
        return "Still a kid";
    }
    else {
        return "Grown up";
    }
}
var user = new Student("Jane", "M", "User", 20);
console.log(greeter(user));
console.log(checkIfAdult(user));
