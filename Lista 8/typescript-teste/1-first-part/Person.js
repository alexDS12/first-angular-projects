"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.info = function () {
        return "Name is: " + this.name + " and age: " + this.age;
    };
    return Person;
}());
exports.Person = Person;
var person = new Person("Alex", 23);
console.log(person.info());
