type Listener = {
    state: string;
    readers: Observer[];
}

// subscriber
interface Observer {
    onNewBook(...params: any[]): void;  // 通知されたら実行する処理
}

// publisher
interface Observable {
    on(state: string, reader: Observer): void;  // 通知対象のオブザーバを追加
    off(state: string, reader: Observer): void;  // オブザーバを通知対象から除外
    notify(state: string, ...params: any[]): void;          // 通知する
}

class Reader implements Observer {

    constructor(private name: string) {}

    public onNewBook(...params: any[]) {
        console.log(this.name, `I will go to buy the ${params} to bookstore`);
    }
}

class Publisher implements Observable {

    private listeners: Listener[];

    constructor(public name: string)  {
        this.listeners = [];
    }

    public on(state: string, reader: Reader) {
        const listener = this.getListener(state);
        if (listener && listener.readers) {
            listener.readers.push(reader);
        } else {
            this.listeners.push({
                state,
                readers: [reader]
            });
        }
    }

    public off(state: string, reader: Reader) {
        const listener = this.getListener(state);
        listener && listener.readers.splice(listener.readers.indexOf(reader), 1);
    }

    public notify(state: string, ...params: any[]) {
        const listener = this.getListener(state);
        listener && listener.readers.forEach((reader: Reader) => reader.onNewBook(params));
    }

    private getListener(state: string): Listener {
        return this.listeners.find((listener) => listener.state === state);
    }
}

const oreilly = new Publisher('oreilly');

const john = new Reader('john');
const paul = new Reader('paul');
const wakamsha = new Reader('wakamsha');

oreilly.on('release', john);
oreilly.on('release', paul);
oreilly.on('sale', wakamsha);

oreilly.notify('release');

console.log('-------- 中略 --------');

oreilly.off('release', john);
oreilly.notify('release');

oreilly.notify('release', '初めてのJavaScript', 'Reactビギナーズガイド');