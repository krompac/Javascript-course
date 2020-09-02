const defaultResult = 0;

let currentResult = defaultResult;

function getUserNumberInput() {
    const input = parseInt(userInput.value);
    return isNaN(input) ? 0 : input;
}

function operation(operationType) {
    const prevResult = currentResult;
    const input = getUserNumberInput();

    switch (operationType) {
        case '+':
            currentResult += input;        
            break;
        case '-':
            currentResult -= input;
            break;
        case '*':
            currentResult *= input;
            break;
        case '/':
            if (input !== 0) {
                currentResult /= input;
            }
            break;
        default:
            break;
    }
    
    outputResult(currentResult, `${prevResult} ${operationType} ${input}`);
}

addBtn.addEventListener('click', () => operation('+'));
subtractBtn.addEventListener('click', () => operation('-'));
multiplyBtn.addEventListener('click', () => operation('*'));
divideBtn.addEventListener('click', () => operation('/'));
