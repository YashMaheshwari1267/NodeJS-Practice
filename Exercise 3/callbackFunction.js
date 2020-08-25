function one(){
    console.log("Function One");
}

function two(){
    console.log("Function Two");
}

setTimeout(one,3000);
two();

const message = function(){
    console.log("Message function");
}

setTimeout(message,2000);

setTimeout(function(){
    console.log("This is my anonymous function");
},1000);

setTimeout(() => {
    return console.log("This is my arrow function");
},500 );