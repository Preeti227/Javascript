//String interpolation
let name = "Preeti";
let age = 20;
let message = `My name is ${name.toUpperCase()} and I am ${age} years old.`;
console.log(message); 

const str1 = new String("Hello-world");
console.log(str1[3])
console.log(str1.length)
console.log(str1.__proto__)
//__proto_ is a property that points to the prototype of the object. It is used to access the properties and methods of the prototype.
//However it is not used and we can directly access the propeties and methods using dot notation.

console.log(str1.indexOf("l")) 
const str2=str1.slice(0,5)
console.log(str2)//output: Hello
//Negative indexing in slice method: it returns the last n characters of the string.
const str3=str1.slice(-5)
console.log(str3)//output: world


const extra="   Hello World     "
console.log(extra.trim())

const url="www.example%20url.com"
console.log(url.replace("%20", "-"))
console.log(url.includes("ex"))


//String immutability: Strings are immutable in JavaScript, which means that once a string is created, it cannot be changed. 
//When we perform any operation on a string, it creates a new string and does not modify the original string.
