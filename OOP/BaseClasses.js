// Базовый синтаксис создания объекта
class Person {

    static type = 'Its a static type';

    constructor(options){
        this.name = options.name;
        this.age = options.age;
        this.city = options.city;
    }

    sayMyName() {
        console.log(`My name is ${this.name}`);
    }

    get GetAge(){
        return this.age * 7 ;
    } // это стандартный геттер, работает не как метод, а как поле.

    set SetAge(value){
        this.age = value
    } // cтандартный сеттер
}


// Наследование
class Employe extends Person{

    constructor(options){
        super(options) // base() у C#. Без этой фичи свои поля создавать классу нельзя
        this.salaty = options.salary;
    }

    sayMyName(){
        console.log('I am employee') // переопределение родительского метода
        super.sayMyName() // а вот здесь мы вызываем родительский метод. При чем в this залетит сам объект Empl. Это уже Context.
    }
}

const emp = new Employe({
    salary : 100500,
    name:'sdf'
})


