function Universe() {

    var instance = this;

    this.start_time = 0;
    this.bang = "Big";

    Universe = function () {
        return instance;
    }

    // return this;
}

 // re
function Universe() {

    var instance;

    Universe = function Universe() {
        return instance;
    };

    Universe.prototype = this;

    instance = new Universe();

    instance.constructor = Universe;

    instance.start_time = 0;
    instance.bang = "Big";

    return instance;

}
