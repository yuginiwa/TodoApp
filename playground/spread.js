function add (a, b) {
		     return a + b;
}

console.log(add(4,2));
var toAdd = [5,5];
console.log(add(...toAdd));

function greeting(name, age) {
     return "Hi " + name + ", you are " + age;
}

var person = ["Carl", 21];
var personTwo = ["Nicole", 18];

console.log(greeting(...person));
console.log(greeting(...personTwo));

var names = ['Nicole', 'Ceira'];
var final = ['Carl', ...names];
final.forEach((name) => {
	console.log('Hi ' + name)
});