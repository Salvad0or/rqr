{
    let mass = [1, 2, 3, 4, 5]

    const [a, b] = mass; // a = 1, b = 2. Остальные элементы просто пропустим

    const [, , c] = mass; // c = 3. Пропускаем два элемента

    const [d, e, ...f] = mass// d =1 , e = 1, f заберет всё элементы массива [3, 4, 5]

    let mass2 = [1, 2, undefined];

    const [j, , h = 3] = mass2; // Для h здесь мы задаем дефолтное значение. В случае если в массиве будет НЕ undefined, мы получим значение из массива

};

{
    const Alex = {
        name: 'Alex',
        age: 20,
        adress: {
            country: 'Russia',
            city: 'Kazan'
        }
    }

    const { name } = Alex; // name = 'Alex'
    const { name: alexName } = Alex; // В этом случае мы присваиваем ключ name в переменную alexName
    const { name: defaultName = 'Без имени' } = Alex; // если имени нет то дефолт

    const {
        adress: {
            country: alexCountry
        }
    } = Alex; // В этом случае мы обращаемся ко вложенному объекту и там уже достаем то, что нам нужно

    const { car = 'Mашины нет' } = Alex; // Ключа car у нас нет и мы получим дефолтное значение

    const{age : alexAge2, ...otherObj} = Alex; //Стандартный REST

    console.log(alexName);
}

{
    // Деструктуризация в функциях

    const Alex = {
        name: 'Alex',
        age: 20,
        adress: {
            country: 'Russia',
            city: 'Kazan'
        }
    }

    const printNameAndAge = ({name,age}) => { //здесь мы деструктуризируем объект прямо на входе
        console.log(name + ' ' + age)
    }

    const printCity = ({adress : {city : alexCity = 'Вдруг нету города'}}) => { // сразу разбивочка + дефолтное значение на всякий
        console.log(alexCity);
    }

    printNameAndAge(Alex); 
    printCity(Alex);
}