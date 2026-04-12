const date=new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());

const date1=new Date(2020,0,25,13,30,0);//month is 0 based
console.log(date1.toLocaleString());

const date2=new Date("December 25, 2020");// This format is also accepted
console.log(date2.toDateString());