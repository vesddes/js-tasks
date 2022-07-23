// 1 задача
let calculator = {
    read: function() {
        this.x = +prompt('Введите число');
        this.y = +prompt('Введите второе число');
    },
    sum: function () {
        return this.x + this.y
    },
    multi: function () {
        return this.x * this.y
    },
    diff: function () {
        return this.x - this.y
    },
    div: function () {
        return this.x / this.y
    }
}

calculator.read();
alert( calculator.sum() );
alert( calculator.multi() );

// 2 задача
//
// let coffeeMachine = {
//     message: 'Your coffee is ready!',
//     delay: 3000,
//     start: function() {
//         setTimeout(() => alert(this.message), this.delay);
//     }
// }
//
// coffeeMachine.start()

// // 3 задача
// let counter = {
//     a: 0,
//     inc: function () {
//         this.a += 1;
//         return this
//     },
//
//     dec: function () {
//         this.a -= 1;
//         return this
//     },
//
//     getValue: function () {
//         return this.a;
//     }
// }
//
// var current = counter.inc().inc().dec().inc().dec().getValue();
// alert(current); // 1
//
// // 4 задача
//
// let me = {
//     getSum: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return (`${this.x} + ${this.y} = ${calculator.sum.call(this,this.x, this.y)}`)
//     },
//     getDiff: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return (`${this.x} - ${this.y} = ${calculator.diff.call(this, this.x, this.y)}`)
//     },
//     getMulti: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return (`${this.x} * ${this.y} = ${calculator.multi.call(this, this.x, this.y)}`)
//     },
//     getDiv: function (x, y) {
//         this.x = x;
//         this.y = y;
//         return (`${this.x} * ${this.y} = ${calculator.div.call(this, this.x, this.y)}`)
//     }
// }
//
// alert(me.getSum(1, 1));
// alert(me.getDiv(1, 0));
//
// // 5 задача
//
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
//
//
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// format.call(country, '', ''); // Ukraine
// format.apply(country, ['[', ']']); // [Ukraine]
// format.call(country.capital, '', ''); // Kyiv
// format.apply(country.capital, ['', '']); // Kyiv
// format.apply(country.name='',['','']); // undefined
// // Или ничего не менять и оставить так:
// // format.apply(/* Ваш код */); // undefined
//
// // 6 задача
//
// let user = {
//     name: 'John',
//     age: 26
// }
//
// function format(start, end) {
//     console.log(start + this.name + end);
// }
//
// let userFormat = format.bind(user)
// userFormat('<<<', '>>>'); // <<<John>>>
//
// // 7 задача
//
// let concat = function (a, b, c) {
//     console.log(a,b,c)
// }
//
// let hello = concat.bind(null,'Hello','')
//
// hello('World'); // Hello World
// hello('John'); // Hello John

// РЕКУРСИЯ

// 1 задача
//
// let b = function (x) {
//     let y = x;
//     for (let i = 1; i < 3; i++) {
//         y = y * x;
//     }
//     console.log(y)
// }
// b(2)
//
// let c = function (z, counter = 2) {
//     if (counter === 0) {
//         return z
//     } else {
//         return z * c(z, counter - 1)
//     }
// }
// console.log(c(3))
//
// // 2 задача
//
// let sum = function (...arguments) {
//     let z = arguments[0];
//     if (arguments.length === 1) {
//         return z
//     } else {
//         return z + sum(...arguments.slice(1))
//     }
// }
//
// console.log( sum(1, 2, 3, 4, 5) );