//Task1
const sumMin = () => {
    const m = +prompt('Enter meaning N'),       //Спрашиваю m
        n = +prompt('Enter meaning M'),         //Спрашиваю n
        myArray = [];                           //Говорю что есть массив
    let sum = 0;                                //Переменная которая будет хранить сумму минимальных элементов массива
    for (let x = 0; x < m; x++) {
        let numbers = new Array(n),             //Создание массива
            min = Number.MAX_VALUE;
        for (let y = 0; y < numbers.length; y++) {
            numbers[y] = Math.round(Math.random() * 100);   //Генерация произвольного числа до 100
            numbers[y] < min ? min = numbers[y] : null;     //Если число больше меньше, перезаписую его в min
        }
        myArray.push([numbers]);                            //Новый массив чисел пушу в основной массив
        sum += min;                                         //При этом дописываю в переменную минимальное число из этого массива
    }
    console.log(myArray);
    console.log(`Sum of minimum array elements ${sum}`);
}
//Task2
const twoOldestAges = (getArray) => {
    getArray.sort((a, b) => { return b - a; })
    return [getArray[0], getArray[1]];}
//Task3
const shortestWord = (str) => {
    /*Создаю переменные для работы:
    start будет хранить индекс первого символа слова
    end будет хранить индекс последнего символа слова
    myString будет хранить строку которую вводить пользователь + пробел после поледнего символа (на случай если самое короткое слово в конце строки)
    myLenght будет хранить длинну строки
    */
    let start = 0,
        end = 0,
        myString = str += ' ';
    myLenght = myString.length;
    /*Цикл будет постоянно переберать слова от пробело до пробела. Когда определяется слово, смотрим сколько внутри него символов. 
    Если кол-во символов меньше чем у прошлого слова, перезаписываем значение в переменную*/
    for (let char = 0; char < myString.length; char++) {
        if (str[char] != ' ') {
            end++;
        } else {
            myLenght > end - start ? myLenght = end - start : start = end;
        }
    }
    return (myLenght);
}
