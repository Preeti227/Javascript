const user={
    username:"Preeti",
    price:999,
    welcomeMessage: function(){
        console.log(`${this.username},Welcome to the website`);
        console.log(this)
    }
}
//user.welcomeMessage()
//user.username="Neha"
//user.welcomeMessage()
//console.log(this)

function check(){
    console.log(this)
}
check()

const arrowfun=()=>{ //Arrow function - just replace the function keyword and replace with arrow
    const username="Preee"
    console.log(this.username)
}
arrowfun()

const add =(num1,num2)=>num1+num2;
const add =(num1,num2)=>(num1+num2);
// both are same
console.log(add(4,5))

