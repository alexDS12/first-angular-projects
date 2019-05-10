//Node.js doesn't have DOM so we can't create DOM objects
var Greeter = /** @class */ (function () {
    function Greeter(message) {
        this.greeting = message;
    }
    Greeter.prototype.greet = function () {
        return "Hi, " + this.greeting;
    };
    return Greeter;
}());
var greeteR = new Greeter("Aleksander");
/*let button = window.document.createElement("button");
let textNode = window.document.createTextNode("Click here");
button.appendChild(textNode);

button.onclick = () => {
    console.log(greeteR.greet());
}

window.document.body.appendChild(button);*/
console.log(greeteR.greet());
