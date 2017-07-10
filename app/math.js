export function add(num1, num2){
    return num1+num2;
}

export function subtract(num1, num2){
    return num1-num2;
}

export function multiply(num1, num2){
    return num1*num2;
}

export function divide(num1, num2){
    if(num2 == 0){
        console.log("can't divide by zero");
        return;
    }
    return num1/num2;
}