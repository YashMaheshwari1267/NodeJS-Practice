
function convertToWords(num){
    var ans="";
    switch(num){
        case 1: ans='one'; break;
        case 2: ans='two'; break;
        case 3: ans='three'; break;
        case 4: ans='four'; break;
        case 5: ans='five'; break;
        case 6: ans='six'; break;
        case 7: ans='seven'; break;
        case 8: ans='eight'; break;
        case 9: ans='nine'; break;
        case 0: ans='ten'; break;
        default: ans="not permitted"; break;
    }
return ans;    
}

console.log(convertToWords(6));
console.log(convertToWords(1));
console.log(convertToWords(11));