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