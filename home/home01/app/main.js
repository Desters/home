const home1_1 = () => {
    const width = prompt('Введите ширину офиса в метрах');          //Ширина
    const height = prompt('Введите высоту офиса в метрах');         //Выоста
    const lenght = prompt('Введите длинну офиса в метрах');         //Длинна
    if (width <= 1000 && height <= 1000 && lenght <= 1000) {          //Не больше 1000
        const S = ((width * height) * 2) + ((lenght * height) * 2);                 //Определение квадратуры команты в метрах.
        const bucketColor = Math.ceil(S / 16);                              //Считаем сколько нужно краски. Окруляем с большую сторону
        console.log(`Чтобы покрасить ${S} метров квадратных, необходимо закупить ${bucketColor} банок краски`);
    }
    else {
        console.log('Вы ввели значение которое превышает максимальное значение');
    }
}

const home1_2 = () => {
    const m1 = [];                    //Массив который хранит ценность золотиго песка всех видов
    const m2 = [];                    //Массив который хранит значение вместительности ёмкостей
    for (let index = 1; index <= 6; index++) {          //заполнение
        index <= 3 ? m1.push(+prompt(`Введите стоимость ${index} го вида`)) : m2.push(+prompt(`Сколько килограмм в ${index}ю ёмкость?`));
    }
    //Сортируем массивы
    m1.sort((a, b) => { return a - b });
    m2.sort((a, b) => { return a - b });
    //Переменная которая будет хранить результат вычислений
    let sum = 0;
    m1.forEach(element => {
        sum += element * m2[element - 1];
    });
    console.log(`В наилучшем случае сотрудники завода смогут заработать ${sum} рублей (рубля) при продаже золотого песка.\n`);
}

const home1_3 = () => {
    const happyTicket = prompt('Введите номер вашего билетика');            //Спрашиваем у пользователя номер его билета
    //Поскольку строка это массив из символов, сравниваем сумму первых трех символов с последними тремя сиволами.
    const res = happyTicket[0] + happyTicket[1] + happyTicket[2] == happyTicket[3] + happyTicket[4] + happyTicket[5];
    res ? console.log("YES") : console.log("NO");
}