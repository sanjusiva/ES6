//Set 
const myArray=[1,2,3,4,5];
const mySet=new Set(myArray);

mySet.add(6);//adding integer
mySet.add('6');//adding string
mySet.add({Name:'Peter'});//adding object
mySet.add([7,8,9]);//adding array
console.log(mySet);

//deleting an element
mySet.delete('6');
console.log(mySet);

//searching an element
console.log(mySet.has(3));

//Size of the set
//Set { 1, 2, 3, 4, 5, 6, { Name: 'Peter' }, [ 7, 8, 9 ] }
//      1  2  3  4  5  6         7                 8
console.log(mySet.size);//8

//Making array without duplicate
const Array1=[1,2,3,1,2,3,4,5]
const Set1=new Set(Array1);
const uniqueArray=[...Set1];
console.log(uniqueArray);//[ 1, 2, 3, 4, 5 ]

//WeakSet
let studentWeakSet=new WeakSet();
let student1={
	Name:'Alex',
	Age:25
}
studentWeakSet.add(student1);
console.log(studentWeakSet);//WeakSet {Object{Name:'Alex',Age:25}}

let student2={
	Name:'Max',
	Age:26
}
studentWeakSet.add(student2);
console.log(studentWeakSet);//WeakSet {Object{Name:'Alex',Age:25},{Object{Name:'Max',Age:26}}}

studentWeakSet.delete(student2);
console.log(studentWeakSet);//WeakSet {Object{Name:'Alex',Age:25}}