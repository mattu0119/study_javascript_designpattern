import 'reflect-metadata';
const NOT_BLANK = 'not blank';

function validate(target: any, propKey: string, desc: PropertyDescriptor) {
    const list: number[] = Reflect.getOwnMetadata(NOT_BLANK, target, propKey);
    if (!list) return;
    const method = desc.value;
    desc.value = function(...args) {
        const blanks = list.filter(n => args[n].trim().length === 0);
        if (blanks.length > 0) throw '引数がブランクです';
        Reflect.apply(method, this, args);
    }
}

function notBlank(target: any, propKey: string, idx: number) {
    const list = Reflect.getOwnMetadata(NOT_BLANK, target, propKey);
    if (list) list.push(idx);
    else Reflect.defineMetadata(NOT_BLANK, [idx], target, propKey);
}

class Sample {
    @validate
    greet(@notBlank name: string) {
        console.log(`hello ${name}`);
    }
}

new Sample().greet(' ');
// → エラー発生