function Universe() {

    if (typeof Universe.instance === "object") {
        return Universe.instance;
    }

    this.start_time = 0;
    this.bang = "Big";

    Universe.instance = this;

    // return this;
}