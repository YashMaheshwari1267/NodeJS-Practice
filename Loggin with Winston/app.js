const logger = require('./logger');

// for(let i=0;i<5;i++){
//     if(i==0)
//         logger.info(`Information message, i= ${i}`);
//     else if(i==1)
//         logger.info(`Warning message, i = ${i}`);
//     else
//         logger.info(`Error message, i = ${i}`);
// }

const a= 10;
const b= 0;
var result=0;
try{
    if(b==0){
        throw err;
    }
    else{
        result = a/b;
    }
}
catch(err){
    logger.warn("Divide by zero is not permitted..!!");
}
if(result!=0)
    logger.info(`Result = ${result}`);
