console.log(shiftToTheRight(-512, 10))

function shiftToTheRight(num, places) {

    if (places == 1) {
        if (num % 2 == 0) return num/2;
        else return Math.floor(num/2);
    }

    let str = num.toString(2);
    str = str.substring(0, str.length - places);

    result = parseInt(str, 2);

    if (result.toString() == "NaN") return -1;
    else return result;
}