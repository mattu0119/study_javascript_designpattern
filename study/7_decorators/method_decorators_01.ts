function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log("target:");
        // console.log(target);
        // console.log('propertyKey:');
        // console.log(propertyKey);
        // console.log('descriptor:');
        // console.log(descriptor);

        descriptor.enumerable = value;

        // console.log(descriptor);

    };
}

class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }

    @enumerable(false)
    greet() {
        return "Hello, " + this.greeting;
    }
}

const a:Greeter = new Greeter('test');

for (let i in a) {
    console.log(i);
}