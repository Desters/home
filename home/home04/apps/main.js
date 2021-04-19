//for Task2---
const MorzeCode = {
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    ".-": "a",
    "-...": "b",
    "-.-.": "c",
    "-..": "d",
    ".": "e",
    "..-.": "f",
    "--.": "g",
    "....": "h",
    "..": "i",
    ".---": "j",
    "-.-": "k",
    ".-..": "l",
    "--": "m",
    "-.": "n",
    "---": "o",
    ".--.": "p",
    "--.-": "q",
    ".-.": "r",
    "...": "s",
    "-": "t",
    "..-": "u",
    "...-": "v",
    ".--": "w",
    "-..-": "x",
    "-.--": "y",
    "--..": "z",
    ".-.-.-": ".",
    "--..--": ",",
    "..--..": "?",
    "-.-.--": "!",
    "-....-": "-",
    "-..-.": "/",
    ".--.-.": "@",
    "-.--.": "(",
    "-.--.-": ")",
    "":" ",
    " ":" ",
}
//----



//Task 1
const ipsBetween = (start, end) => {
    //Преобразование строки в массив из запись в переменную.
    let StartIp = start.split('.'), EndIp = end.split('.');
    //Преобразование всех элементов массива в числа.
    StartIp = StartIp.map((el) => +el);
    EndIp = EndIp.map((el) => +el);
    //Создал свой массив который будет хранить результаты вычислений активного диапазона.
    const elemArr = [
        (EndIp[0] - StartIp[0]) * Math.pow(256, 3),
        (EndIp[1] - StartIp[1]) * Math.pow(256, 2),
        (EndIp[2] - StartIp[2]) * 256,
        EndIp[3] - StartIp[3]
    ];
    //Суммирую все активные элементы.
    const result = elemArr.reduce((accum, elem) => accum + elem);
    return console.log(result);
}

//Task 2
const decodeMorse = (str) => {
    let arrStr = str.split(' ');
    let charStr = '';
    for (let i = 0; i < arrStr.length; i++) {
        charStr += MorzeCode[arrStr[i]];
    }
    return charStr;
}

//Task 3