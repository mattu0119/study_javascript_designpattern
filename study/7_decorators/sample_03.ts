function uriEncoded(target: any, propKey: string, desc: PropertyDescriptor) {
    const method = desc.value;
    desc.value = function () {
        const res = Reflect.apply(method, this, arguments);
        if (typeof(res) === 'string') {
            return encodeURIComponent(res);
        }
        return res;
    };
}

class Sample {
    @uriEncoded
    hoge(): string {
        return 'こんにちは';
    }
}

console.log(new Sample().hoge());
// 出力
// %E3%81%93%E3%82%93%E3%81%AB%E3%81%A1%E3%81%AF