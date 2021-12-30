let ageField="age";
let info={
	"name":"Kevin",
	[ageField]:26,
	"greet him"(){
		console.log(this.name+', '+this.age);
	}};
info["greet him"]();
console.log(info["age"]);
console.log(info.name);
console.log(info[ageField]);