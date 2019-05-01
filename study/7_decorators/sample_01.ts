function outputLog(
    target: any,
    propKey: string,
    descriptor: PropertyDescriptor,
) {
    const original = descriptor.value;
    descriptor.value = function () {
        const key = `${target.constructor.name}#${propKey}`;
        console.log(`${key}: start`);
        console.time(key);
        const ret = Reflect.apply(original, this, arguments);
        if (ret/* ret が Promiseか判定 */) {
            return ret.then((ret) => {
                console.timeEnd(key);
                return ret;
            });
        }
        console.timeEnd(key);
        return ret;
    };
}

function sleep(sec: number) {
    const start = Date.now();
    let now = Date.now();
    while (now - start <= sec * 1000) {
        now = Date.now();
    }
}

function delay(sec: number): Promise<void> {
    return new Promise(r => setTimeout(r, sec * 1000));
}

class Sample_01 {
    constructor(private name: string) {}

    @outputLog
    greet() {
        sleep(3);
        console.log(`hello ${this.name}`);
    }
    @outputLog
    async greetAsync() {
        await delay(10);
        console.log(`hello ${this.name}`);
    }
}

new Sample_01('world').greet();
new Sample_01('async workd').greetAsync();
// 出力↓
/*
Sample#greet: start
hello world
Sample#greet: 3001.297ms
Sample#greetAsync: start
hello async workd
Sample#greetAsync: 3005.303ms
*/