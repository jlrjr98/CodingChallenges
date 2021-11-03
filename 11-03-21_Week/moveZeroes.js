function zeroesToEnd(arr) {

    let total = 0;
    arr.filter(x => x == 0).forEach(x => total++);

    let indexes = [];

    for (i = 0; i < arr.length; i++) {

        if (arr[i] == 0) {
            indexes.push(i);
        }
    }

    for (n = indexes.length - 1; n >= 0; n--) {
        arr.splice(indexes[n], 1);
    }

    for (y = 0; y < total; y++) {
        arr.push(0);
    }

    return arr;
}