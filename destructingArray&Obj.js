//Destructing array & objects

let numbers=[1,2,3];
let [a,b]=numbers;
console.log("a:"+a+" b:"+b);

//grouping the numbers
let [l,...m]=numbers;
console.log("a:"+l+" b:"+m);

//Cannot change the given value
let [a='Default',b,c]=numbers;
console.log(a);

//Swapping
let x=15;
let y=25;
console.log("Before swapping:/n");
console.log("x:"+x+" y:"+y);
[y,x]=[x,y];
console.log("After swapping:/n");
console.log("x:"+x+" y:"+y);

//Destructing Objects
let info={
name:'Felix',
age:25,
greet:function(){
console.log(`Hi! My name is ${name}.I am ${age} years old.`);
}};
let{name,age,greet}=info;
greet();