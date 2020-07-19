const defaultResult = 0;

let currentResult = defaultResult;

function add() {
    const prevResult = currentResult;
    const input = Number(userInput.value);

    if (!isNaN(input)) {
        currentResult += input;
        outputResult(currentResult, `${prevResult} + ${input}`);
    }
}

addBtn.addEventListener('click', add);
