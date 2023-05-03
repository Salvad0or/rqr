// Прототип это объект, который присутствует у объектов
// Вызывается по цепочке сверху вниз

Object.prototype.sayHello = () => {
    console.log('Hello')
}

let somethingVariable = 7;
somethingVariable.sayHello(); // Простыми словами метод расширения из C#

Array.prototype.multBy = function(n) {

    return this.map(i => i * n)
    // Использование Прототипов в связке с контекстом 
} 

let mass = [1, 2, 3, 4, 5];

console.log(mass.multBy(5)); 