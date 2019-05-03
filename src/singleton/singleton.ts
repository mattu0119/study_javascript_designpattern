
class Universe {

    private static _instance: Universe;

    private constructor () {}

    public static get instance(): Universe {
        if (!this._instance) {
            this._instance = new Universe();
        }
        return this._instance
    }

}

export {Universe}