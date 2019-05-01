function configurable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        descriptor.configurable = value;

        console.log(`configurable`);
        console.log(descriptor);

    };
}

function enumerable(value: boolean) {
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        // console.log("target:");
        // console.log(target);
        // console.log('propertyKey:');
        // console.log(propertyKey);
        // console.log('descriptor:');
        // console.log(descriptor);

        descriptor.enumerable = value;

        console.log(`enumerable`);
        console.log(descriptor);

    };
}

class Point {
    private _x: number;
    private _y: number;
    constructor(x: number, y: number) {
        this._x = x;
        this._y = y;
    }

    @enumerable(false)
    @configurable(false)
    get x() { return this._x; }

    @enumerable(true)
    @configurable(true)
    get y() { return this._y; }
}

const a:Point = new Point(1,1);

for (let i in a) {
    console.log(i);
}