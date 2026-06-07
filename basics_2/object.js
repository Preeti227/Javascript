//singleton

const mySym = Symbol("key1")
const abc = {
    name: "Preeti",
    age: 20,
    [mySym]: "mykey1",
    email: "abc@gmail.com",
    location: "Kolkata",
    isLoggedIn: true,
    last_login: ['Mon', 'Wed']
}

console.log(abc["email"])
console.log(abc.email)
console.log(abc[mySym])


//Object.freeze(abc) //prevents from overriding
abc.email = "abc@chatgpt.com" //= is used for overriding 
console.log(abc["email"])
console.log(abc)

abc.greeting=function(){
    console.log("hello");
}

abc.greeting_two=function(){
    console.log(`hello ${this.name}`);
}
console.log(abc.greeting())
console.log(abc.greeting_two())

const obc={'1': 'one', '2': 'two'}
const obc1={'3': 'one', '4': 'two'}

const obj3=Object.assign(obc, obc1) //merging two objects
console.log(obj3)

const obj4=Object.assign({}, obc, obc1) //merging two objects without modifying the original objects
console.log(obj4)   