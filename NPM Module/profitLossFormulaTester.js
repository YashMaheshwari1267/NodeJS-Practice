const profitLossFormulas = require('profitlossformulanpm');

let costPrice = 100;
let sellingPrice = 150;


let pOrL = profitLossFormulas.profitOrLoss(sellingPrice,costPrice);
//Profit or Loss
console.log(pOrL);

//Profit% or Loss%
console.log(profitLossFormulas.profitOrLossPercent(sellingPrice,costPrice));
