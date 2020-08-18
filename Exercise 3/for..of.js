var myArray = [1,2,3,4,5,6];

var it = myArray[Symbol.iterator]();
console.log(it.next());
console.log(it.next());
it.next();
console.log(it.next());