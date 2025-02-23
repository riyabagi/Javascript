function numberSum(num) {
    return num.reduce((sum, nums) => sum + nums, 0);
}

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(numberSum(num)); // Output: 45

function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15
