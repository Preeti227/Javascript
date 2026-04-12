const score=100
console.log(score)//This has a return type of number

const score2= new Number(100)
console.log(score2) //this has a return type of object

console.log(score2.toString().length)
console.log(score.toFixed(2))//100.00

const hundred=40000000000
console.log(hundred.toLocaleString("en-IN"))
//toLocaleString() method is used to convert a number into a string, formatted according to the locale of the environment. In this case, it formats the number according to the Indian numbering system, which uses commas as thousand separators and lakhs and crores as units.

const precision=234.8934
console.log(precision.toPrecision(4))
//toPrecision() method is used to format a number to a specified length. 


console.log(Math.random())//Returns a random number between 0 (inclusive) and 1 (exclusive)
console.log(Math.random()*10+1)//Returns a random number between 1 (inclusive) and 11 (exclusive)

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1)+min))
//1. Math.random() generates a random number between 0 (inclusive) and 1 (exclusive).
//2. Multiplying it by (max - min + 1) scales the range to be between 0 and (max - min + 1).
//3. Adding min shifts the range to be between min and max (inclusive).
//4. Finally, Math.floor() rounds down the result to the nearest integer, giving us a random integer between min and max (inclusive).