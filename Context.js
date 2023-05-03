function hello() {
    console.log('Hello', this)

    // this динамический объект
}

/// this === window (true)

const Alex = {
    name: 'Alex',
    age: 28,
    hi: hello,
    hiWindow : hello.bind(window), // сюда мы биндим виндоу

    nameInfo : function(props){
        console.log(`Имя объекта - ${this.name}`) // старый добрый с# в деле
        console.log(`Сюда упал этот пропс - ${props}`)
    }
}

// BIND // 

const Lena = {
    name : 'Lena',
    age : 38
}

Alex.nameInfo.bind(Lena); // Метод bind не вызывает функцию. Он возвращяет новую функцию, которая привязала новый контекст
Alex.nameInfo.bind(Lena)(); // Мы вызовем, причем ключевое слово this будет уже работать с объектом Lena
Alex.nameInfo.bind(Lena,'Props')() // Так мы можем передавать дополнительные параметры в методы

// CALL // 

Alex.nameInfo.call(Lena, 'Props'); // В отличии от bind вызывается сразу. Bind же функцию возвращяет.

// APPLY // 

Alex.nameInfo.apply(Lena, ['Props']) // В отичии от CALL принимает аргументы в виде массива. Так же вызовет фунцию сразу.