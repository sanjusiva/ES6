//Rest & Spread operator

function sumUp(...toAdd)//rest operator
{
//console.log(toAdd);
let result=0;
for(let i=0;i<toAdd.length;i++){
result+=toAdd[i];
}
return result;
}
let numbers=[1,2,3,4,5];
console.log(sumUp(1,2,3,4,5));
console.log(Math.max(...numbers));//spread operator

