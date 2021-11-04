function shiftToTheRight(num, places) {

    if (places == 1) return Math.floor(num/2);

    let str = num.toString(2);

    tempStr = str;
    if (tempStr[0] == '-') tempStr = tempStr.substring(1);
    if (places >= tempStr.length) return -1;

    if (str[0] == '-') {
        for (i = str.length - 1; places > 0; i--) {
            if (str[i] == 0) {
                str = str.substring(0, i) + str.substring(i + 1);
                places--;
            }
        }
    } else {
        str = str.substring(0, str.length - places);
    }

    return parseInt(str, 2);
}