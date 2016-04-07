var util = require('util');
function Parent(){
	
}

Parent.prototype.sayHello = function(){
	console.log('hello world, from parent class!');
}

var obj = new Parent();
obj.sayHello();

function Child(){
	
}

util.inherits(Child,Parent);

var obj2 = new Child();
obj2.sayHello();