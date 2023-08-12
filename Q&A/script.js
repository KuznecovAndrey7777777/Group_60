// class StringBuilder {
//     #value;
//     constructor(initialValue) {
//         this.#value = initialValue;
//     }
//     getValue() {
//         return this.#value;
//     }

//     padEnd(str) {
//         this.#value += str;
//     };

//     padStart(str) {
//         this.#value = str + this.#value;
//     }

//     padBoth(str) {
//         this.padStart(str);
//         this.padEnd(str);
//     }
// }
// const test = new StringBuilder('1234')
// console.log(test.getValue());


// if(~idx)
// if(!!~idx)
// console.log(!!0);
// console.log(!!1);
// console.log(Boolean(1));




// let arr = [1, 'c', 2, 3, 'a', 4, 'b', 5, 6];

// arr= arr.filter(item => typeof item === 'number' );

// console.log(arr);


// let i = 0
// while (i < 0) {
//     console.log(i);
//     i += 1
// }

// do {
//     console.log(i);
//     i += 1;
// } while (i < 0)


// let arr = [1, 'c', 2, 3, 'a', 4, 'b', 5, 6];

// let i = 0;
// while (i < arr.length) {
//     console.log(arr[i]);
//     i += 1
// }



//Створити функцію яка буде рахувати за скільки днів равлик зможе виповзти з колодязя, функція приймає 1 параметр.
//1 глибина колодязя (depth)

//Функція повертає кількість днів

// Умови:
// вдень Равлик проповзає на 7 м вгору, а за ніч опускається на 2 м вниз
// використовувати цикл while()

// function calcDays(depth) {
//     const daySpeed = 7;
//     const nightSpeed = 2;
//     // let total = 0;
//     let days = 0;
//     //     while (total < depth) {
//     //         total += daySpeed;
//     //         days += 1;
//     //         if (total < depth) {
//     //             total -= nightSpeed
//     //         }
//     //     }

//     // console.log(days);
//     // for (let total = 0; total < depth; total += daySpeed) {
//     //     days += 1;
//     //     if (total < depth) {
//     //         total -= nightSpeed
//     //     }
//     // }
//     // console.log(days);
//     // const result = Math.round(depth / (daySpeed - nightSpeed))
//     // console.log(result);

// }
// calcDays(42) //виповзе за 8 днів
// calcDays(17) //виповзе за 3 дні
// calcDays(18) //виповзе за 4 дні

// https://forum.jscourse.com/t/rekursiya-obekta-kak-sdelat-polnuyu-kopiyu-obekta/2751
// https://learn.javascript.ru/recursion


// function foo(start, end) {
//     if (start !== end) {
//         // start += 1
//         console.log(start, end);
//         foo(start, end)
//     }



// }
// foo(1, 10)



// function sum(a, b) {
//     return a + b
// }
// foo(1, 2)


// // const input = prompt('enter name')
// const names = ['Olga','Pavlo','Kate']
// // console.log(names.push('Artem'))
// console.log(names[names.push('Artem') - 1]);
// console.log(names);
// function checkName(name) {
//     if (!name) {
//         alert('Please enter name')
//         checkName(prompt('enter name'));
//         return;
//     }
//     if(names.includes(name)){
//         alert(`Hello ${name}`)
//         return;
//     }
//     alert('Please register')

// }
// checkName(input)
// function foo(a, b) {
//     const sum = a + b;
//     if (sum >= 20) {
//         return 'MAX VALUE';
//     }
//     return sum;

// }


// console.log(foo(2, 10));



// const names = ['Olga', 'Pavlo', 'Kate'];
// // console.log(names[0]);
// for (let i = 0; i < names.length; i += 1){
//     console.log(names[i]);
// }
// const value = prompt();
// console.log(typeof value);

// const user = {
//     name: 'Artem',
//     age: 28,
// }
// const keys = Object.keys(user)
// console.log(keys);
// for (const key of keys) {
//     console.log('Назва ключа ', key, user[key]);
// }

// const apartment = {
//     tags: ['like','hotel']
// }



// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);



// function foo(){
//     let x = 55;
//     function boo(a){
//         return x + a
//     }
//     return boo
// }



// console.log(foo()(12));
// boo()

// https://monsterlessons.com/project/lessons/singleton-pattiern-v-javascript
// let counterModule = (function () {
//     let instance;
//     let counter = 0;

//     let getCounter = function () {
//         return counter;
//     }

//     let increaseCounter = function () {
//         counter+=1;
//     }

//     let createInstance = function () {
//         return {
//             getCounter: getCounter,
//             increaseCounter: increaseCounter
//         }
//     }

//     return {
//         getInstance: function () {
//             return instance || (instance = createInstance());
//         }
//     }
// })();


// const counter = counterModule.getInstance();
// counter.increaseCounter()
// counter.increaseCounter()
// counter.increaseCounter()

// let counter2 = counterModule.getInstance();
// console.log(counter2.getCounter());



// const number = 11111111111111111111111111111111111111111111111111111111111111111111111111111;
// const big = 11111111111111111111111111111111111111111111111111111111111111111111111111111n +1n;

// // console.log(typeof number);
// console.log( Number(big));

// console.log(Number.MAX_SAFE_INTEGER);





// const symbol = Symbol();
// const symbol2 = Symbol();
// const object = Object(symbol)
// console.log(object);
// console.log(symbol2);






// const obj = {
//     name: 'Name',
//     age: 28
// }

// const newObj = {
//     ...obj
// };
// console.log(newObj);

// const foo = (...args) => {

// }


// foo(1, 2, 3, 4)
// class User {
// constructor( name, email ) {
//     this.name = name;
//     this.email = email;
//   }

// }

// const admin = new User('Artem', 'test@gm.com')
// class User {
//     #password
//     constructor(name, password) {
//         this.name = name;
//         this.#password = password
//     }
//     get password() {
//         return this.#password
//     }

//     set password(newPassword) {
//         this.#password = newPassword
//     }
//     checkName() {
//         console.log(this.name);
//     }
// }


// const user = new User('Artem', 123456)
// user.password = 'qwerty'
// console.log(user.password);
// console.log(user);

// const arr = [1,2]
// console.log(arr);
// Object.prototype.customFunction = function(){
//    return 'Hello from prototype'
// }
// console.log(user.customFunction());



// Можна розглянути Завдання 5 з минулого заняття. Я щось робив, але не впевнений що правильно

// Example 5 - Toggle
// Напишіть клас Toggle, який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false). За зомовчуванням значення властивості on має бути false.

// class Toggle {
//     constructor({
//         isOpen = false
//     } = {}) {
//         this.on = isOpen;
//     }

//     toggle() {
//         this.on = this.on ? false : true;
//     }

//     toggle() {
//         this.on = !this.on
//     }
// }

// const firstToggle = new Toggle({
//     isOpen: true
// });
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);

// firstToggle.toggle();
// console.log(firstToggle.on);
// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle(true);
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');


// function foo(a, b) {
//     console.log(this, `a => ${a}`, `b => ${b}`);

// }

// foo(1, 2)



// foo.call({
//     name: 'Hello'
// }, 1, 2)


// foo.apply({
//     name: 'Hello'
// },[ 1, 2])




// const copy = foo.bind({name: 'Hello'})
// copy(1,2);
// copy(3,2);
// copy(4,2)


// Чому не працює addPotion ? якщо змінити місцями умови і через === в
// if працює.Не розумію як працювати з !==

// const atTheOldToad = {
//     potions: [{
//             name: "Speed potion",
//             price: 460
//         },
//         {
//             name: "Dragon breath",
//             price: 780
//         },
//         {
//             name: "Stone skin",
//             price: 520
//         },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const i of this.potions) {
//             if (i.name !== newPotion.name) {
//                  this.potions.push(newPotion);
//                  return;
//             }
//         }
//         return `Error! Potion ${newPotion.name} is already in your inventory!`;

//     },
// }
// atTheOldToad.addPotion({
//     name: "Custom potion",
//     price: 460
// })
// console.log(atTheOldToad);



// const atTheOldToad = {
//     potions: [{
//             name: "Speed potion",
//             price: 460
//         },
//         {
//             name: "Dragon breath",
//             price: 780
//         },
//         {
//             name: "Stone skin",
//             price: 520
//         },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },
//     addPotion(newPotion) {
//         for (const potion of this.potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;

//             }
//             this.potions.push(newPotion)
//         }

//     },
//     removePotion(potionName) {
//         this.potions.forEach((el, idx) => {
//             if (el.name === potionName) {
//                 this.potions.splice(idx, 1)
//                 return;
//             }
//         })
//     },
//     updatePotionName(oldName, newName) {
//         this.potions.forEach((el) => {
//             if (el.name === oldName) {
//                 el.name = newName
//                 return;
//             }
//         })
//     },
//     // Change code above this line
// };


// setTimeout(()=>{
//     console.log('hello');
// },3000)


// Home work 2

// #1

// Запиши умову в інструкції if таким чином, щоб функція працювала правильно.

// Оголошена функція checkAge(age).
// У виразі перевірки віку використаний оператор >=
//     Виклик checkAge(20) повертає "You are an adult"
// Виклик checkAge(8) повертає "You are a minor"
// Виклик checkAge(14) повертає "You are a minor"
// Виклик checkAge(38) повертає "You are an adult"
// В тілі функції є тільки одна інструкція if
// В тілі функції відсутні інструкції else або else if

// function checkAge(age) {
//     let message;

//     if (age >= 18) {
//         message = "You are an adult";
//     } else {
//         message = "You are a minor";
//     }

//     return message;
// }
// console.log(checkAge(20));
// console.log(checkAge(8));
// console.log(checkAge(14));
// console.log(checkAge(38));

// #2

// Функція checkPassword отримує пароль користувача у параметр password,
// перевіряє його на збіг з паролем адміністратора у змінній ADMIN_PASSWORD і
// повертає повідомлення про результат порівняння.
//  Виконай  функції використовуючи патерн «раннє повернення».
// Оголошена функція checkPassword(password)
// Виклик checkPassword("mangohackzor") повертає "Access denied, wrong password!"
// Виклик checkPassword("polyhax") повертає "Access denied, wrong password!"
// Виклик checkPassword("jqueryismyjam") повертає "Welcome!"

// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";

//     if (password === ADMIN_PASSWORD) {
//         return "Welcome!";
//     }
//     return "Access denied, wrong password!";
// }

// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"))

// #3

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

//     available - доступна кількість товарів на складі
// ordered - кількість одиниць товару в замовленні
// Виконай  функції checkStorage, використовуючи патерн «раннє повернення».

// Оголошена функція checkStorage(available, ordered)
// Виклик checkStorage(100, 50) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(100, 130) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(70, 0) повертає "Your order is empty!"
// Виклик checkStorage(200, 20) повертає "The order is accepted, our manager will contact you"
// Виклик checkStorage(200, 250) повертає "Your order is too large, not enough goods in stock!"
// Виклик checkStorage(150, 0) повертає "Your order is empty!"

// function checkStorage(available, ordered) {

//     if (ordered === 0) {
//         return "Your order is empty!";
//     }

//     if (ordered > available) {
//         return "Your order is too large, not enough goods in stock!";
//     }

//     return "The order is accepted, our manager will contact you";

// }

// console.log(checkStorage(100, 50))

// #4

// Оголоси змінну fruits і присвой їй масив фруктів - рядків "apple", "plum", "pear" і "orange".

// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "plum", "pear", "orange"]

// const fruits = ["apple", "plum", "pear", "orange"];

// console.log(fruits)

// #5

// Оголоси три змінні і присвой кожній з них значення, використовуючи нотацію квадратних дужок.

//     Ім'я змінної	Значення змінної
// firstElement	перший елемент масиву
// secondElement	другий елемент масиву
// lastElement	останній елемент масиву
// Оголошена змінна firstElement
// Значення змінної firstElement - це рядок "apple"

// const fruits = ["apple", "plum", "pear", "orange"];

// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length -1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// #6

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// #7

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength);

// #8

// Оголоси дві зміні:

// Ім'я змінної	Очікуване значення
// lastElementIndex	Індекс останнього елемента масиву fruits через довжина_масиву - 1
// lastElement	Значення останнього елемента масиву
// Оголошена змінна lastElementIndex
// Значення змінної lastElementIndex - це число 3
// Оголошена змінна lastElement
// Значення змінної lastElement - це рядок "banana"

// const fruits = ["apple", "peach", "pear", "banana"];

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElementIndex);
// console.log(lastElement);

// #9

// Напиши функцію getExtremeElements(array), яка приймає один параметр array - масив елементів довільної довжини.
// Функція повинна повертати масив з двох елементів - першого і останнього елемента параметра array.

// Оголошена функція getExtremeElements(array)
// Виклик getExtremeElements([1, 2, 3, 4, 5]) повертає[1, 5]
// Виклик getExtremeElements(["Earth", "Mars", "Venus"]) повертає["Earth", "Venus"]
// Виклик getExtremeElements(["apple", "peach", "pear", "banana"]) повертає["apple", "banana"]

// function getExtremeElements(array) {

//     const firstExtremeElements = array.splice(0, 1);
//     const lastExtremeElements = array.splice(-1, 1);
//     return firstExtremeElements.concat(lastExtremeElements);

//     // return [array[0], array[array.length - 1]]; // варіант 2

// }

// console.log(getExtremeElements([1, 2, 3, 4, 5])); // [1, 5]
// console.log(getExtremeElements(["Earth", "Mars", "Venus"])); // ["Earth", "Venus"]
// console.log(getExtremeElements(["apple", "peach", "pear", "banana"])); // ["apple", "banana"]

// #10

// Доповни код функції splitMessage(message, delimiter) таким чином,
// щоб вона повертала у змінній words результат поділу рядка message за роздільником delimiter - масив рядків.

// Оголошена функція splitMessage(message, delimiter)
// Виклик splitMessage("Mango hurries to the train", " ") повертає["Mango", "hurries", "to", "the", "train"]
// Виклик splitMessage("Mango", "") повертає["M", "a", "n", "g", "o"]
// Виклик splitMessage("best_for_week", "_") повертає["best", "for", "week"]

// function splitMessage(message, delimiter) {
//     let words;

//     words = message.split(delimiter);

//     return words;

// }

// console.log(splitMessage("Mango hurries to the train", " "))

// #11

// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування,
//     залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord).Ця функція приймає рядок,
//     що складається зі слів, розділених лише пробілами(параметр message) та ціну гравірування одного слова(параметр pricePerWord).

// Напиши тіло функції, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {

//     const words = message.split(' ');
//     const totalWords = words.length;
//     const totalPrice = totalWords * pricePerWord;
//     return totalPrice;

// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 10)); // 50
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20)); // 100
// console.log(calculateEngravingPrice("Web-development is creative work", 40)); // 160
// console.log(calculateEngravingPrice("Web-development is creative work", 20)); // 80

// Ця функція спочатку розбиває рядок message на масив слів за допомогою методу split(' '),
// де пробіл є роздільником.Потім вона обчислює загальну кількість слів у масиві words за допомогою властивості length,
// і в циклі перемножає цю кількість на pricePerWord, щоб отримати загальну вартість гравірування усіх слів.
// Функція повертає цю загальну вартість як результат.

// #12

// Доповни код функції makeStringFromArray(array, delimiter) таким чином,
// щоб вона повертала у змінній string результат з'єднання елементів масиву array з роздільником delimiter - рядок.

// Оголошена функція makeStringFromArray(array, delimiter)
// Виклик makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ") повертає "Mango hurries to the train"
// Виклик makeStringFromArray(["M", "a", "n", "g", "o"], "")) повертає "Mango"
// Виклик makeStringFromArray(["top", "picks", "for", "you"], "_") повертає "top_picks_for_you"

// function makeStringFromArray(array, delimiter) {
//     const string = array.join(delimiter);
//     return string;
// }

// console.log(makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ")); // "Mango hurries to the train"
// console.log(makeStringFromArray(["M", "a", "n", "g", "o"], "")); // "Mango"
// console.log(makeStringFromArray(["top", "picks", "for", "you"], "_")); // "top_picks_for_you"

// #12

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире (Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.)
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

