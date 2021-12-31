//Lucky draw prize with 50% possibility
var p=new Promise(function(resolve,reject){
	var number=Math.random();
	if(number<0.5){
		resolve();
	}
	else{
		reject();
	}

});
p.then(function(){
	console.log("Success,You have been selected in this lucky draw");
}).catch(function(){
	console.log("Error,Sorry you haven't chosen for his lucky prize");
});
