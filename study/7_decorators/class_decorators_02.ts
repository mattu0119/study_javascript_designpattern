function classDecorator<T extends {new(...args:any[]):{}}>(constructor:T) {
    return class extends constructor {
        newProperty = "new property";
        hello = "override";
    }
}

@classDecorator
class Greeter {
    property = "property";
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }

    greet() {
        return "Hello, " + this.hello;
    }

}

console.log(new Greeter("world"));

const a:Greeter = new Greeter('test');
console.log(a.greet());

