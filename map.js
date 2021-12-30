//Map
const myMap=new Map([['name','John'],['age',25]]);
console.log(myMap);//Map { 'name' => 'John', 'age' => 25 }

//Inserting key value pair
myMap.set('city','Chennai');
console.log(myMap);//Map { 'name' => 'John', 'age' => 25, 'city' => 'Chennai' }

//deleting key value pair
myMap.delete('city');
console.log(myMap);//Map { 'name' => 'John', 'age' => 25 }

//Searching key
console.log(myMap.has('age'));//true
console.log(myMap.has(25));//false -> bcoz search will be done by key not by value

//size of map
console.log(myMap.size);//2

//WeakMap
let studentWeakMap=new WeakMap();
let registerNumber1={
	id:101
}
let student1={
	Name:'Alex',
	Age:25
}
studentWeakMap.set(registerNumber1,student1);
console.log(studentWeakMap);//WeakMap {Object{id:101} => Object{Name:'Alex',Age:25}}