// -----------------------Spread & Rest Operator

let numbers = [1, 2, 3];
let newNumbers = [...numbers, 4, 5];
console.log(numbers);
console.log(newNumbers);

function sum(...num) { // Rest
    return num.reduce((acc, num) => acc + num);
}
console.log(sum(1, 2, 3, 4));