{
    // Promise это обертка над ассинхронностью.
    const a = new Promise((resolve, reject) => {

        const Alex = {
            name: 'Alex',
            age: 17,
            city: 'Kazan'

        };

        setTimeout(() => {
            console.log('Hi')

            resolve({ ...Alex, name: 'Boba' });  // Вызывается когда закончена ассинхрнная операция, и она закончена успешна/ Здесь мы говорим,
            // Что промис завершил своё выполнение
        }, 2000);

    }).then(({ name }) => {
        console.log(name)
    })

    console.log('sdfsdf')
}

{
    const sleep = (ms) => {

        return new Promise((resolve) =>{
            setTimeout(() => {
                console.log(`I was sleeping for ${ms / 1000} sec`)
                resolve();
            }, ms);
        })
    }

    Promise.all([sleep(1000), sleep(2000)])
    .then(() => {
        console.log('Все методы отработали') // Ну тут понятно да? принимает все необходимые задачи, и в коце выполняет необходимый метод
    })

    Promise.race([sleep(1000), sleep(2000)])
    .then(() => {
        console.log('Все методы отработали') // то же самое, только метод выполнится после первого самого быстрого промиса
    })
}