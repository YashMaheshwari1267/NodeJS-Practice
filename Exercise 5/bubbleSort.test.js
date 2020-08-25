const sortArray = require('./bubbleSort');

//1. testing positive integers 
test('Test positive integers',() => {
    const a=[12,4,5,18,90];
    expect(sortArray(a)).toEqual([4,5,12,18,90]);
});

//2. testing negative integersnp
test('Testing negative integers', () => {
    const a = [-10,-1,-23,-98,-33];
    expect(sortArray(a)).toEqual([-98,-33,-23,-10,-1]);
});

//3. testing with repeated numbers
test('Testing repeated numbers', () => {
    const a = [1,6,5,6,1];
    expect(sortArray(a)).toEqual([1,1,5,6,6]);
});

//4. testing with both negative and positive integers
test('Testing both negative and positive integers', () => {
    const a = [-10,-1,23,-98,33];
    expect(sortArray(a)).toEqual([-98,-10,-1,23,33]);
});

//5. testing with zero 
test('Testing with zero', () => {
    const a = [-10,-1,1,0,7];
    expect(sortArray(a)).toEqual([-10,-1,0,1,7]);
});

//6. testing in exact reverse order
test('Testing in exact reverse order', () => {
    const a = [9,8,7,6,5];
    expect(sortArray(a)).toEqual([5,6,7,8,9]);
});

//7. testing already sorted order
test('Testing already sorted order', () => {
    const a = [1,2,3,4,5];
    expect(sortArray(a)).toEqual([1,2,3,4,5]);
});
