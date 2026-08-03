const obj=new Object()//singleton object


obj.id="123";
obj.name="Preets"
obj.isLoggedIn=false
//console.log(obj)
const obj1={}//non-singleton
//console.log(obj1)
console.log(Object.keys(obj))//return type array
console.log(obj.hasOwnProperty("isLoggedIn"))
const regularUser={
    email:"abc@gmail.com",
    fullname:{
        userName:{
            firstName:"Pree",
            lastName:"Pree"
        }
    }
}
console.log(regularUser.fullname.userName.firstName)


const obj2={1:"A",2:"B"}
const obj3={3:"A",4:"B"}
const obj4=Object.assign({},obj2,obj3)
console.log(obj4)