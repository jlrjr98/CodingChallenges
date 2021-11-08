
function trackRobot(north, east, south, west) {

    if (north == null) north = 0;
    if (east == null) east = 0;
    if (south == null) south = 0;
    if (west == null) west = 0;

    return [east - west, north - south];
}