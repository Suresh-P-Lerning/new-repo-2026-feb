// 1. function declation 
function sum(num1, num2){
    const total = num1 + num2;
    console.log(total)
}
// sum(10, 20)

// 2. function expression 
const sum2 = function(num1, num2){
    const total= num1 * num2; 
    console.log(total)
}
// sum2(10, 10)

const sum3=function(num1, num2){
    return num1 + num2
}


const arrowFunction = (num1, num2)=>num1*num2
const result = arrowFunction(20,20); 
// console.log(result)

const multiplefun = (x, y)=> {
    const maketDouble = x * 2; 
    const againDouble = y * 2; 
    const result = maketDouble + againDouble; 
    return result
}
const result2 = multiplefun(10, 20)
console.log(result2)