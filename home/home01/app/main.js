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
    const aValue = [];                    //Массив который хранит ценность золотиго песка всех видов
    const bValue = [];                    //Массив который хранит значение вместительности ёмкостей
    for (let index = 1; index <= 6; index++) {          //заполнение
        if (index < 4) {
            aValue.push(+prompt(`Введите стоимость ${index} го вида`))                       //заполняем массив aValue
        }
        else {
            bValue.push(+prompt(`Сколько килограмм можно поместить в ${index}ю ёмкость?`))   //заполняем массив bValue
        }
    }
    //Сортируем массивы
    aValue.sort();
    bValue.sort();
    //Переменная которая будет хранить резуотат вычислений
    let sum = 0;
    aValue.forEach(element => {
        sum += element * bValue[element - 1];
    });
    console.log(`В наилучшем случае сотрудники завода смогут заработать ${sum} рублей при продаже золотого песка.\n`);
}

const home1_3 = () => {
    const happyTicket = prompt('Введите номер вашего билетика');            //Спрашиваем у пользователя номер его билета
    //Поскольку строка это массив из символов, сравниваем сумму первых трех символов с последними тремя сиволами.
    if (happyTicket[0] + happyTicket[1] + happyTicket[2] == happyTicket[3] + happyTicket[4] + happyTicket[5]) {
        console.log("YES");         //Вывод если билет счасливый
    }
    else {
        console.log("NO");          //Вывод если билет не счасливый
    }
}