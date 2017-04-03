function nearlyEqual(a, b) {
    return Math.abs(a - b) <= 0.001;
}

function degreesToRadians(degrees) {
    return degrees * Math.PI / 180;
}

function randomInt(value) {
    return Math.floor(Math.random() * value);
}

function randomDirection() {
    var x = randomInt(2);
    return (x == 0) ? -1 : x;
}