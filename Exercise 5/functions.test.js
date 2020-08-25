const functions = require('./functions');


//add two numbers
test('Adds 2+2 equals 4',() => {
    expect(functions.add(2,2)).toBe(4);
});


//is Null
test('Is null',() => {
    expect(functions.isNull()).toBeNull();
});

//is less than certain value
test('is less than 1500',()=>{
    const l1 = 300;
    const l2 = 800;
    expect(l1 +l2).toBeLessThan(1500);
});

//Regex
test('there is no I in yash',() => {
    expect('yash').not.toMatch(/i/);
});