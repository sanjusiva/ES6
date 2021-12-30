function* range(){
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
}
let iterator=range();

for(let i of iterator)
	console.log(i);/*
					1
					2
					3
					4
					5
					*/

console.log([...iterator]);//[1, 2, 3, 4, 5]

let item=iterator.next();
while(!item.done){
	console.log(item);
	item=iterator.next();
}/*[object Object] {
  done: false,
  value: 1
}
[object Object] {
  done: false,
  value: 2
}
[object Object] {
  done: false,
  value: 3
}
[object Object] {
  done: false,
  value: 4
}
[object Object] {
  done: false,
  value: 5
}*/

function* range1(start,finish){
	while(start<=finish)
		yield start++;
}
let iterate=range1(1,10);
let element=iterate.next();
while(!element.done){
	console.log(element);
	element=iterate.next();
}
/*
[object Object] {
  done: false,
  value: 1
}
[object Object] {
  done: false,
  value: 2
}
[object Object] {
  done: false,
  value: 3
}
[object Object] {
  done: false,
  value: 4
}
[object Object] {
  done: false,
  value: 5
}
[object Object] {
  done: false,
  value: 6
}
[object Object] {
  done: false,
  value: 7
}
[object Object] {
  done: false,
  value: 8
}
[object Object] {
  done: false,
  value: 9
}
[object Object] {
  done: false,
  value: 10
}
*/