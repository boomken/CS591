//helper function
const plus = expression => {
    let result = Number(expression.charAt(0)) + Number(expression.charAt(2));
    return result;
}
const minus = expression => {
    let result = expression.charAt(0) - expression.charAt(2);
    return result;
}
const mult = expression => {
    let result = expression.charAt(0) * expression.charAt(2);
    return result;
}
const divide = expression => {
    let result = expression.charAt(0) / expression.charAt(2);
    return result;
}

const evaluate = str => {
    var operator = str.charAt(1);
    switch (operator) {
        case '+':
            return plus;
            break;
    }
    switch (operator) {
        case '-':
            return minus;
            break;
    }
    switch (operator) {
        case '*':
            return mult;
            break;
    }
    switch (operator) {
        case '%':
            return divide;
            break;
    }
}

const expression = '8%3';
let operator = evaluate(expression);
console.log(`${expression} = ${operator(expression)}`)

const expression1 = '8+3';
let operator1 = evaluate(expression1);
console.log(`${expression1} = ${operator1(expression1)}`)

const expression2 = '8*3';
let operator2 = evaluate(expression2);
console.log(`${expression2} = ${operator2(expression2)}`)

const expression3 = '8-3';
let operator3 = evaluate(expression3);
console.log(`${expression3} = ${operator3(expression3)}`)