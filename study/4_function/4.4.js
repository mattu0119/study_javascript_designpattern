var scareMe = function () {
    console.log("Boo!");
    scareMe = function () {
        console.log("Double boo!");
    }
}

scareMe.property = "properly";

var prank = scareMe;

var spooky = {
    boo: scareMe
}
