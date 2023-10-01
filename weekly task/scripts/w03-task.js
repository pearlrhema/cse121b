/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    let sum = number1 + number2;
    return sum
}

function addNumbers () {
    let addNumber1 = Number(document.querySelector('#add1').value)
    let addNumber2 = Number(document.querySelector('#add2').value)
    document.querySelector('#sum').value = add(addNumber1, addNumber2)
};
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
const subtract = function(number1, number2) {
    return `${number1 - number2}`;
};

const subtractNumbers = function(){
    let subNumber1 = Number(document.querySelector('#subtract1').value)
    let subNumber2 = Number(document.querySelector('#subtract2').value)
    document.querySelector('#difference').value = subtract(subNumber1, subNumber2)
};
document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers)

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => `${number1 * number2}`;

const multiplyNumbers = function(){
    let factor1 = Number(document.querySelector('#factor1').value)
    let factor2 = Number(document.querySelector('#factor2').value)
    document.querySelector('#product').value = multiply(factor1, factor2)
};
document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers)


/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => `${number1 / number2}`;

const divideNumbers = function(){
    let dividend = Number(document.querySelector('#dividend').value)
    let divisor = Number(document.querySelector('#divisor').value)
    document.querySelector('#quotient').value = multiply(dividend, divisor)
};
document.querySelector('#divideNumbers').addEventListener('click', divideNumbers)

/* Decision Structure */
const currentDate = new Date(2023, 9, 29);
let currentYear = '';
currentYear = currentDate.getFullYear();
//console.log(currentYear);


/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13]
document.querySelector('#array').innerHTML = numbersArray;
/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(number => number % 2 !== 0);
/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(number => number % 2 === 0);

/* Output Sum of Org. Array */
let sum = numbersArray.reduce(sumFunction);
function sumFunction(total, value, index, array){
    return total + value;
}
document.querySelector('#sumOfArray').innerHTML = sum;

/* Output Multiplied by 2 Array */
let multiplied = numbersArray.map((x) => x * 2);
document.querySelector('#multiplied').innerHTML = multiplied;

/* Output Sum of Multiplied by 2 Array */
//let sumOfSourceArrayTimesTwo = sum * 2;
let sumOfMultiplied = multiplied.reduce(sumFunction);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;