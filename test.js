const stack = ["FIBO", "SQ_NO_SER", "PENT_SER", "MAG_SQ_SER", "LOOK_SAY_SEQ", "CAT_SER"];

function stringToNum(str) {
    let asciiArray = "";
    for (let i = 0; i < str.length; i++) {
        asciiArray += str.charCodeAt(i);
    }
    return asciiArray;
}

function executeCommands(command, str) {
    let result;
    switch (command) {
        case "FIBO":
            result = genFibo(str);
            break;
        case "SQ_NO_SER":
            break;
        case "PENT_SER":
            break;
        case "MAG_SQ_SER":
            break;
        case "LOOK_SAY_SEQ":
            break;
        case "CAT_SER":
            break;
    }
    return result;
}

function fibo(x) {
    
}

function genFibo(str) {
    let result;
    for (let i = 0; i < str.length; i++) {
        
    }
}

async function init(string) {
    let str = stringToNum(string);
    console.log(str);
    for (let index = 0; index < stack.length; index++) {
        str = executeCommands(stack[index], str);
    }
    return str;
}

console.log(init("Hello world"));