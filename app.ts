let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Max';
if(typeof userInput === 'string') {
    userName = userInput;
}

function generateError(massage: string, code: number): never {
    throw {massage: massage, errorCode: code};
}

generateError('오류가 발생했습니다!', 500);
