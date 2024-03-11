const stack = [
  "FIBO",
  "SQ_NO_SER",
  "PENT_SER",
  "MAG_SQ_SER",
  "LOOK_SAY_SEQ",
  "CAT_SER",
];

function stringToNum(str) {
  let asciiArray = "";
  for (let i = 0; i < str.length; i++) {
    asciiArray += str.charCodeAt(i);
  }
  return asciiArray;
}

async function executeCommands(command, str) {
  let result;
  switch (command) {
    case "FIBO":
      result = await genFibo(str);
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
  if (x === 0) {
    return 0;
  }
  if (x === 1 || x === 2) {
    return 1;
  } else {
    return fibo(x - 1) + fibo(x - 2);
  }
}

async function genFibo(str) {
  let result;
  for (let i = 0; i < str.length; i++) {
    result += await fibo(i);
  }
  return result;
}

async function init(string) {
  let str = stringToNum(string);
  console.log(str);
  for (let index = 0; index < stack.length; index++) {
    str = await executeCommands(stack[index], str);
  }
  return str;
}

async function main(){
    const encoded =await init("Hello")
    console.log(encoded);
}

main()


