//var myArray = [-1, 23, 40, 11, 0, 10, 2, -9, 16, 32];

const sortArray = (myArray)=> {
    for(let i=0;i<myArray.length;i++){
        for(let j=0;j<myArray.length-i-1;j++){
        if(myArray[j] > myArray[j+1]){
                let temp=myArray[j];
                myArray[j]=myArray[j+1];
                myArray[j+1]=temp;
            }
        }
    }
    return myArray;
}

module.exports = sortArray;

// console.log(myArray);
// sortArray();
// console.log(myArray);