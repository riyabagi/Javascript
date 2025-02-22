// -----------------------------------------Arrays in js

let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
fruits.push("Mango");
fruits.pop();
fruits.shift();
fruits.unshift("Grapes");

let size = fruits.length;
for (let index = 0; index < size; index++) {

    console.log(`Hello ${fruits[index]}`);
}