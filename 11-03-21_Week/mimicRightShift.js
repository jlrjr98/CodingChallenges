function shiftToTheRight(num, places) {

    let str = num.toString(2);
    str = str.substring(0, str.length - places);

    return parseInt(str, 2);
}