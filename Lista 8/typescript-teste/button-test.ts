//Node.js doesn't have DOM so we can't create DOM objects

class Greeter {
    greeting: string;

    constructor(message: string) {
        this.greeting = message;
    }

    greet() {
        return "Hi, " + this.greeting;
    }
}

let greeteR = new Greeter("Aleksander");
/*let button = window.document.createElement("button");
let textNode = window.document.createTextNode("Click here");
button.appendChild(textNode);

button.onclick = () => {
    console.log(greeteR.greet());
}

window.document.body.appendChild(button);*/

console.log(greeteR.greet());