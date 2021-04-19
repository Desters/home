//Task 1
const SortWords = (str) => {
    const MyArr = str.split(' ');
    const Calculation = MyArr.sort((a, b) => {
        return (a[a.search(/\d/)] - b[b.search(/\d/)]);
    })
    return Calculation;
}

//Task 2
const TicTacToe = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        //Проверяем все горизонтали
        const horizont = (arr[i][0] == arr[i][1]) && (arr[i][1] == arr[i][2]) && (arr[i][0] != 0);
        if (horizont) { return arr[i][0] }
        //Проверяем все вертикали
        const vertical = (arr[0][i] == arr[1][i]) && (arr[1][i] == arr[2][i]) && (arr[0][i] != 0);
        if (vertical) { return arr[0][i] }
    }
    //Проверка по левой диагонали
    let LeftD = arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2] && arr[1][1] != 0;
    if (LeftD) { return arr[1][1] }
    //Проверка по правой диагонали
    let RightD = arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0] && arr[1][1] != 0;
    if (RightD) { return arr[1][1] }
    //Проверка на ничью и незаконченную игру
    let inLine = arr.includes(0);
    if (inLine) { return -1 }
    if (!inLine) { return 0 }
}

//Task 3 
const Meeting = (argArr, count) => {
    if (count == 0) { return console.log('Game On') }
    const takeChairs = [];
    let meter = 0;
    const SpareChairs = [];
    for (let el = 0; el < argArr.length; el++) {
        let freeChairs = argArr[el][1] - argArr[el][0].length;
        takeChairs.push(argArr[el][1] - argArr[el][0].length);
        while (freeChairs) {
            if (count == meter) { break }
            freeChairs--;
            meter++;
        }
        SpareChairs.push(freeChairs);
        if (SpareChairs[el] > 0) { return console.log('Not enough!') }
    }
    return takeChairs;
}
