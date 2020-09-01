var keeps = [];
for (var i = 0; i < 3; i++) {
    keeps[i] = function keepI(){
    // closure over `i`
    return i;
    };
}
console.log(keeps[0].name+" "+keeps[1].name +" "+keeps[2].name);
console.log(keeps[0]()); 
console.log(keeps[1]()); 
console.log(keeps[2]()); 