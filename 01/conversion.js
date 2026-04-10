let score="5a5"
console.log(typeof(score))

let scoreInNum=Number(score)
console.log(typeof(scoreInNum))//number
console.log(scoreInNum)//NaN - Not a Number

let isLoggedIn=0
let booleanIsLoggedIn=Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)
console.log(typeof(booleanIsLoggedIn))

//"" => false
// 0 =>false 1=>true

let str1= "Hello"
let str2="world"

let str3=str1+ str2
console.log(str3)

console.log("1"+2+2)//122
console.log(1+2+"2")//32

//=== Strict check (checks value as well as the datatype)
console.log("2"==2)
console.log("2"===2)


let id=Symbol("123")
let anotherid=Symbol("123")
console.log(id===anotherid)


//Array
const ar=['Preeti','Neha','Xyz'];

//Object
let myObj={
    name:"Preeti",
    age:20
}

//Function
const myFunc = function(){
    console.log("Hello World");
}


// Stack and Heap Memory
// Stack Memory - Primitive data types are stored here (string, number, boolean, null, undefined, symbol)
// Heap Memory - Non-primitive data types are stored here (array, object, function)

// When we assign a primitive data type to a variable, it is stored in the stack memory as a copy. 
// When we assign a non-primitive data type to a variable, it is stored in the heap memory and the variable holds a reference to the location of the data in the heap memory.   
// In non-primitive data types there are no copies, only reference is passed. So if we change the value of a non-primitive data type, it will change the value for all the variables that reference to that data in the heap memory.

let myName="Preeti"
let anotherName=myName
console.log(myName)
console.log(anotherName)

myName="Neha"
console.log(myName)
console.log(anotherName)
// This is because myName and anotherName are stored in the stack memory as a copy. So when we change the value of myName, it does not affect anotherName.

let myObj1={
    name:"Preeti",
    age:20
}

let anotherObj=myObj1
console.log(myObj1)
console.log(anotherObj)

anotherObj.name="Neha"
console.log(myObj1)
console.log(anotherObj)
// This is because myObj1 and anotherObj are stored in the heap memory and both variables hold a reference to the same location of the data in the heap memory. So when we change the value of anotherObj, it changes the value for myObj1 as well.