// fucntions passed as arguments to other functions
function display(result) {
    console.log(`the result is: ${result}`);
}


function sum(num1, num2, callback) { // callback function passed as an parameter
    let sum = num1 + num2;
    callback(sum);
}

function subtract(num1, num2, callback) {
    let diff = num1 - num2;
    callback(diff);
}


sum(2,3, display); // call back passed as an argument

subtract(2,4, display); // no parenthesis when invoking the callback function 