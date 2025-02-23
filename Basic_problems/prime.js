function isPrimeNumber(num) {
    if (num < 2) return false;
    else {
        for (let count = 2; count < num; count++) {
            if (num % count == 0)
                return false;
        }
        return true;
    }
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let nums of num) {
    console.log(nums, isPrimeNumber(nums));
}