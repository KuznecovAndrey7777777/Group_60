// Home work 4

// #1

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
// а у змінній pointer було посилання на функцію makePizza.

// Оголошена функція makePizza
// Оголошена змінна result
// Значення змінної result - це рядок "Your pizza is being prepared, please wait."
// Значення змінної result отримане за допомогою виклику функції
// Оголошена змінна pointer
// Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }

// const result = makePizza(); // Виклик функції та збереження результату в змінну result

// const pointer = makePizza; // Збереження посилання на функцію в змінну pointer

// console.log(result);
// console.log(pointer);

// Тепер у змінній result збережений результат виконання функції makePizza,
//     а в змінній pointer збережене посилання на функцію makePizza.

// #2

// Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback) колбек -
//     функцію і повертала її виклик.Функція deliverPizza або makePizza буде передаватися як колбек і
//     очікувати аргументом ім'я готової піци, що доставляється.

// Оголошена функція deliverPizza
// Оголошена функція makePizza
// Оголошена функція makeMessage
// Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
// Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
// Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

// function deliverPizza(pizzaName) {
//     return `Delivering ${pizzaName} pizza.`;
// }

// function makePizza(pizzaName) {
//     return `Pizza ${pizzaName} is being prepared, please wait...`;
// }

// function makeMessage(pizzaName, callback) {
//     return callback(pizzaName);
// }

// const message1 = makeMessage("Royal Grand", makePizza);
// console.log(message1); // Рядок "Pizza Royal Grand is being prepared, please wait..."

// const message2 = makeMessage("Ultracheese", deliverPizza);
// console.log(message2); // Рядок "Delivering Ultracheese pizza."

// У цьому коді функція makeMessage очікує два параметри: pizzaName і callback,
//     і викликає callback(pizzaName) для передачі аргументу pizzaName колбек - функції.

// #3

// Доповни другий виклик функції makePizza(pizzaName, callback), передавши другим аргументом інлайн колбек -
//     функцію eatPizza(pizzaName), яка логує рядок "Eating pizza <назва піци>".

// Оголошена функція makePizza
// Функція makePizza приймає два параметри
// Другим аргументом під час виклику makePizza("Ultracheese") передана функція eatPizza з єдиним параметром pizzaName

// function makePizza(pizzaName, callback) {
//     console.log(`Pizza ${pizzaName} is being prepared, please wait...`);
//     callback(pizzaName);
// }

// makePizza("Royal Grand", function deliverPizza(pizzaName) {
//     console.log(`Delivering pizza ${pizzaName}.`);
// });
// // Change code below this line

// makePizza("Ultracheese", function eatPizza(pizzaName) {
//     console.log(`Eating pizza ${pizzaName}.`);
// });

// У цьому коді для другого виклику makePizza("Ultracheese"), ми додали інлайн колбек - функцію,
//     яка логує рядок "Eating pizza <назва піци>".

// #4

// Необхідно написати логіку обробки замовлення піци.Виконай рефакторинг методу order таким чином,
//     щоб він приймав другим і третім параметром два колбеки onSuccess і onError.

// Якщо у властивості pizzas відсутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onError,
//         передаючи йому аргументом рядок "There is no pizza with a name <имя пиццы> in the assortment."
// Якщо у властивості pizzas присутня піца з назвою з параметра pizzaName,
//     метод order повинен повертати результат виклику колбека onSuccess,
//         передаючи йому аргументом назву замовленої піци.
// Після оголошення об'єкта pizzaPalace ми додали колбеки і виклики методів. Будь ласка, нічого там не міняй.

// Метод order оголошує три параметри
// Виклик pizzaPalace.order("Smoked", makePizza, onOrderError)
// повертає "Your order is accepted. Cooking pizza Smoked."
// Виклик pizzaPalace.order("Four meats", makePizza, onOrderError)
// повертає "Your order is accepted. Cooking pizza Four meats."
// Виклик pizzaPalace.order("Big Mike", makePizza, onOrderError)
// повертає "Error! There is no pizza with a name Big Mike in the assortment."
// Виклик pizzaPalace.order("Vienna", makePizza, onOrderError)
// повертає "Error! There is no pizza with a name Vienna in the assortment."

// const pizzaPalace = {
//     pizzas: ["Ultracheese", "Smoked", "Four meats", "Margherita", "Barbecue", "Hawaiian"],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         }
//         return onError(`Error! There is no pizza with a name ${pizzaName} in the assortment.`);
//     },
// };
// // Change code above this line

// // Ваші колбеки makePizza та onOrderError
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// function onOrderError(error) {
//     return error;
// }

// console.log(pizzaPalace.order("Smoked", makePizza, onOrderError));
// console.log(pizzaPalace.order("Four meats", makePizza, onOrderError));
// console.log(pizzaPalace.order("Big Mike", makePizza, onOrderError));
// console.log(pizzaPalace.order("Vienna", makePizza, onOrderError));

// Цей код використовує передані колбеки makePizza та onOrderError для обробки замовлення піци,
//     як описано в завданні.


// #5

// Функція calculateTotalPrice(orderedItems) приймає один параметр orderedItems - масив чисел,
//     і розраховує загальну суму його елементів, яка зберігається у змінній totalPrice і
//     повертається як результат роботи функції.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція calculateTotalPrice(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     // Change code below this line

//     orderedItems.forEach((item) => {
//         totalPrice += item;
//     });

//     // Change code above this line

//     return totalPrice;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4]));  // 138
// console.log(calculateTotalPrice([164, 48, 291]));    // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  // 1116

// Цей код використовує метод forEach для перебору масиву orderedItems та додає кожен елемент до totalPrice.

// #6

// Функція filterArray(numbers, value) приймає масив чисел numbers і повертає новий масив,
//     в якому будуть тільки ті елементи оригінального масиву, які більші за значення параметра value.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція filterArray(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає[4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає[5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає[]
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає[41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає[24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function filterArray(numbers, value) {
//     const filteredArray = [];

//     // Change code below this line

//     numbers.forEach((number) => {
//         if (number > value) {
//             filteredArray.push(number);
//         }
//     });

//     // Change code above this line

//     return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3));  // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));  // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));  // []
// console.log(filterArray([12, 24, 8, 41, 76], 38));  // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));  // [24, 41, 76]

// Тепер функція використовує метод forEach для перебору масиву чисел та додавання чисел,
//     що задовольняють умову(більші за value), до нового масиву filteredArray.


// #7

// Функція getCommonElements(firstArray, secondArray) приймає два масиви довільної довжини в параметри firstArray і
// secondArray, і повертає новий масив їхніх спільних елементів, тобто тих, які присутні в обох масивах.

// Виконай рефакторинг функції таким чином, щоб замість циклу for, вона використовувала метод forEach.

// Оголошена функція getCommonElements(firstArray, secondArray)
// Для перебирання параметра(масиву) використаний метод forEach
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає[2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає[1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає[12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає[10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає[]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     // Change code below this line

//     firstArray.forEach((element) => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     return commonElements;

//     // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 4]));  // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));  // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));  // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));  // []

// Тепер функція використовує метод forEach для перебору першого масиву та перевірку,
//     чи містить другий масив кожен елемент з першого масиву.Якщо так,
//         то цей елемент додається до масиву commonElements.


// #8

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона була оголошена як стрілочна.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами(quantity, pricePerItem)
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line

// function calculateTotalPrice(quantity, pricePerItem) {
//     // Change code above this line
//     return quantity * pricePerItem;
// }

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60));  // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

// Ця функція приймає два параметри, quantity та pricePerItem, і виконує обчислення у вигляді стрілкової функції.
// Результати вираховані відповідно до переданих параметрів.

// #9

// Виконай рефакторинг функції calculateTotalPrice() таким чином, щоб вона використовувала неявне повернення.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметрами(quantity, pricePerItem)
// У функції використане неявне повернення
// Виклик calculateTotalPrice(5, 100) повертає 500
// Виклик calculateTotalPrice(8, 60) повертає 480
// Виклик calculateTotalPrice(3, 400) повертає 1200
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//     return quantity * pricePerItem;
// };
// // Change code above this line

// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem;

// console.log(calculateTotalPrice(5, 100)); // 500
// console.log(calculateTotalPrice(8, 60));  // 480
// console.log(calculateTotalPrice(3, 400)); // 1200

// Ця функція залишається тією ж самою, але використовує неявне повернення для однорядкових операцій,
//     які виразно вказують на результат обчислення.

// #10

// Виконай рефакторинг функції calculateTotalPrice(orderedItems), замінивши її оголошення на стрілочну функцію.
// Заміни колбек - функцію, передану в метод forEach(), на стрілочну функцію.

// Оголошена змінна calculateTotalPrice
// Змінній calculateTotalPrice присвоєна стрілочна функція з параметром(orderedItems)
// Для перебирання масиву orderedItems використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function calculateTotalPrice(orderedItems) {
//     let totalPrice = 0;

//     orderedItems.forEach(function (item) {
//         totalPrice += item;
//     });

//     return totalPrice;
// }
// // Change code above this line

// const calculateTotalPrice = orderedItems => {
//     let totalPrice = 0;

//     orderedItems.forEach(item => totalPrice += item);

//     return totalPrice;
// };

// console.log(calculateTotalPrice([12, 85, 37, 4]));   // 138
// console.log(calculateTotalPrice([164, 48, 291]));     // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));  // 1116

// Цей код використовує стрілочну функцію для оголошення calculateTotalPrice та для колбеку методу forEach,
//     що спрощує код.Він залишає функціональність незмінною.

// #11

// Заміни оголошення функції filterArray() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна filterArray
// Змінній filterArray присвоєна стрілочна функція з параметрами(numbers, value)
// Для перебирання масиву numbers використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає[4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає[5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає[]
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає[41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає[24, 41, 76]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function filterArray(numbers, value) {
//     const filteredNumbers = [];

//     numbers.forEach(function (number) {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// // Change code below this line
// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) {
//             filteredNumbers.push(number);
//         }
//     });

//     // Change code above this line
//     return filteredNumbers;
// };

// console.log(filterArray([1, 2, 3, 4, 5], 3));  // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4));  // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5));  // []
// console.log(filterArray([12, 24, 8, 41, 76], 38));  // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20));  // [24, 41, 76]

// Цей код використовує стрілочну функцію для оголошення filterArray та для колбеку методу forEach,
//     що спрощує код.Він залишає функціональність незмінною.

// #12

// Заміни оголошення функції getCommonElements() і колбек для методу forEach() на стрілочні функції.

// Оголошена змінна getCommonElements.
// Змінній getCommonElements присвоєна стрілочна функція з параметрами(firstArray, secondArray)
// Для перебирання масиву firstArray використаний метод forEach
// Колбек для методу forEach - це стрілочна функція
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає[2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає[1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає[12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає[10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає[]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];

//     firstArray.forEach(function (element) {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });

//     // Change code above this line
//     return commonElements;
// }

// // Change code below this line
// const getCommonElements = (firstArray, secondArray) => {
//     const commonElements = [];

//     firstArray.forEach(element => {
//         if (secondArray.includes(element)) {
//             commonElements.push(element);
//         }
//     });
//     // Change code above this line
//     return commonElements;
// };

// console.log(getCommonElements([1, 2, 3], [2, 4]));  // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));  // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));  // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));  // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));  // []

// Цей код використовує стрілочну функцію для оголошення getCommonElements та для колбеку методу forEach.
// Функціональність залишається незмінною.

// #13

// Функція changeEven(numbers, value) приймає масив чисел numbers і оновлює кожен елемент,
//     значення якого - це парне число, додаючи до нього значення параметра value.

// Виконай рефакторинг функції таким чином, щоб вона стала чистою - не змінювала масив чисел numbers,
//     а створювала, наповнювала і повертала новий масив з оновленими значеннями.

// Оголошена функція changeEven(numbers, value)
// Функція changeEven не змінює значення параметра numbers
// Виклик changeEven([1, 2, 3, 4, 5], 10) повертає новий масив[1, 12, 3, 14, 5]
// Виклик changeEven([2, 8, 3, 7, 4, 6], 10) повертає новий масив[12, 18, 3, 7, 14, 16]
// Виклик changeEven([17, 24, 68, 31, 42], 100) повертає новий масив[17, 124, 168, 31, 142]
// Виклик changeEven([44, 13, 81, 92, 36, 54], 100) повертає новий масив[144, 13, 81, 192, 136, 154]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// function changeEven(numbers, value) {
//     // Change code below this line
//     for (let i = 0; i < numbers.length; i += 1) {
//         if (numbers[i] % 2 === 0) {
//             numbers[i] = numbers[i] + value;
//         }
//     }
//     // Change code above this line
// }

// function changeEven(numbers, value) {
//     // Change code below this line
//     const updatedArray = [];

//     for (let number of numbers) {
//         updatedArray.push(number % 2 === 0 ? number + value : number);
//     }

//     return updatedArray;
//     // Change code above this line
// }

// console.log(changeEven([1, 2, 3, 4, 5], 10));  // [1, 12, 3, 14, 5]
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));  // [12, 18, 3, 7, 14, 16]
// console.log(changeEven([17, 24, 68, 31, 42], 100));  // [17, 124, 168, 31, 142]
// console.log(changeEven([44, 13, 81, 92, 36, 54], 100));  // [144, 13, 81, 192, 136, 154]

// Ця функція створює новий масив updatedArray, перебирає вхідний масив numbers,
//     додає value до парних чисел і додає результати до нового масиву.Початковий масив numbers залишається незмінним.

// #14

// Доповни код таким чином, щоб у змінній planetsLengths вийшов масив довжин назв планет.
//     Обов'язково використовуй метод map().

// Оголошена змінна planets
// Значення змінної planets - це масив["Earth", "Mars", "Venus", "Jupiter"]
// Оголошена змінна planetsLengths
// Значення змінної planetsLengths - це масив[5, 4, 5, 7]
// Для перебирання масиву планет використаний метод map()

// const planets = ["Earth", "Mars", "Venus", "Jupiter"];

// // Change code below this line

// const planetsLengths = planets.map(planet => planet.length);

// console.log(planetsLengths); // [5, 4, 5, 7]

// Ви використовуєте метод map(), щоб створити новий масив planetsLengths,
//     де кожен елемент відображає довжину відповідної планети в масиві planets.

// #15

// Використовуючи метод map(), зроби так, щоб у змінній titles вийшов масив назв книг(властивість title) з
// усіх об'єктів масиву books.

// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна titles
// Значення змінної titles - це масив["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man",
//     "Redder Than Blood", "Enemy of God"]
// Для перебирання масиву books використовується метод map() як чиста функція

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// // Change code below this line

// const titles = books.map(book => book.title);

// console.log(titles);

// This code uses the map() method to create a new array called titles,
//     which contains the titles of the books from the books array.When you run this code,
//         it will print the book titles to the console.

// #16

// Використовуючи метод flatMap(), зроби так, щоб у змінній genres вийшов масив усіх жанрів книг(властивість genres)
// з масиву книг books.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна genres
// Значення змінної genres - це масив["adventure", "history", "fiction", "horror", "mysticism"]
// Для перебирання масиву books використовується метод flatMap()

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism"],
//     },
// ];
// // Change code below this line

// const genres = books.flatMap(book => book.genres);

// console.log(genres);

// This code uses the flatMap() method to create a new array called genres,
//     which contains all the genres from the books array.When you run this code,
//         it will print the array of genres to the console.

// #17

// Доповни функцію getUserNames(users) таким чином, щоб вона повертала масив імен користувачів(властивість name) з
// масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром(users).
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив["Moore Hensley",
//     "Sharlene Bush", "Ross Vazquez", "Elma Head", "Carey Barr", "Blackburn Dotson", "Sheree Anthony"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserNames = users => users.map(user => user.name);
// // Change code above this line

// console.log(getUserNames);

// Ця функція використовує метод map, щоб створити новий масив,
//     в якому містяться лише імена користувачів з масиву об'єктів users.

// #18

// Доповни функцію getUserEmails(users) таким чином, щоб вона повертала масив поштових адрес
// користувачів(властивість email) з масиву об'єктів в параметрі users.

// Оголошена змінна getUserNames
// Змінній getUserNames присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод map()
// Виклик функції із зазначеним масивом користувачів повертає масив["moorehensley@indexia.com",
//     "sharlenebush@tubesys.com", "rossvazquez@xinware.com", "elmahead@omatom.com", "careybarr@nurali.com",
//     "blackburndotson@furnigeer.com", "shereeanthony@kog.com"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserEmails = users => users.map(user => user.email);
// // Change code above this line

// Ця функція використовує метод map, щоб створити новий масив,
//     в якому містяться поштові адреси користувачів з масиву об'єктів users.

// #19

// Доповни код таким чином, щоб у змінній evenNumbers утворився масив парних чисел з масиву numbers,
//     а в змінній oddNumbers - масив непарних.Обов'язково використовуй метод filter().

// Оголошена змінна numbers
// Значення змінної numbers - це масив[17, 24, 82, 61, 36, 18, 47, 52, 73]
// Оголошена змінна evenNumbers
// Значення змінної evenNumbers - це масив[24, 82, 36, 18, 52]
// Оголошена змінна oddNumbers
// Значення змінної oddNumbers - це масив[17, 61, 47, 73]
// Для перебирання масиву numbers використаний метод filter()

// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => number % 2 === 0);
// const oddNumbers = numbers.filter(number => number % 2 !== 0);

// Цей код використовує два виклики методу filter() для створення масиву evenNumbers,
//     в якому лише зберігаються парні числа, та масиву oddNumbers,
//         в якому лише зберігаються непарні числа з масиву numbers.

// #20

// Доповни код таким чином, щоб у змінній allGenres був масив всіх жанрів книг(властивість genres) з масиву books,
//     а у змінній uniqueGenres - масив унікальних жанрів, без повторень.

// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна allGenres
// Значення змінної allGenres - це масив["adventure", "history", "fiction", "mysticism", "horror", "mysticism",
//     "adventure"]
// Оголошена змінна uniqueGenres
// Значення змінної uniqueGenres - це масив["adventure", "history", "fiction", "mysticism", "horror"]
// Для обчислення значення змінної allGenders використаний метод flatMap()
// Для обчислення значення змінної uniqueGenres використаний метод filter()

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         genres: ["adventure", "history"],
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         genres: ["fiction", "mysticism"],
//     },
//     {
//         title: "Redder Than Blood",
//         author: "Tanith Lee",
//         genres: ["horror", "mysticism", "adventure"],
//     },
// ];
// // Change code below this line

// // Отримуємо масив усіх жанрів (з можливими повтореннями) за допомогою flatMap()
// const allGenres = books.flatMap(book => book.genres);

// // Отримуємо масив унікальних жанрів без повторень за допомогою filter() та Set
// const uniqueGenres = allGenres.filter((genre, index, self) => self.indexOf(genre) === index);

// console.log(allGenres); // Масив усіх жанрів
// console.log(uniqueGenres); // Масив унікальних жанрів

// // Цей код використовує метод filter() для видалення дублікатів із масиву allGenres і
// // створення масиву унікальних жанрів в uniqueGenres.

// // #21

// Використовуючи метод filter(), доповни код таким чином, щоб:

// У змінній topRatedBooks утворився масив книг, рейтинг яких(властивість rating) більший за або дорівнює значенню змінної MIN_RATING.
// У змінній booksByAuthor утворився масив книг, написаних автором з ім'ям (властивість author), яке збігається зі значенням у змінній AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив об'єктів
// Оголошена змінна MIN_RATING
// Значення змінної MIN_RATING - це число 8
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Bernard Cornwell"
// Оголошена змінна topRatedBooks
// Значення змінної topRatedBooks - це масив книг з рейтингом, вищим за 8
// Оголошена змінна booksByAuthor
// Значення змінної booksByAuthor - це масив книг, автор яких "Bernard Cornwell"
// Для перебирання масиву books використаний метод filter()

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks); // Масив книг з рейтингом >= 8
// console.log(booksByAuthor); // Масив книг автора "Bernard Cornwell"

// Цей код створює два окремих масиви: topRatedBooks для книг із рейтингом не менше 8 та
//  booksByAuthor для книг автора "Bernard Cornwell".

// #22

// Доповни функцію getUsersWithEyeColor(users, color) таким чином, щоб вона повертала масив користувачів,
//     у яких колір очей(властивість eyeColor) збігається зі значенням параметра color.

// Оголошена змінна getUsersWithEyeColor
// Змінній getUsersWithEyeColor присвоєна стрілочна функція з параметрами(users, color)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра color - це "blue", функція повертає масив об'єктів користувачів з
// іменами Moore Hensley, Sharlene Bush і Carey Barr
// Якщо значення параметра color - це "green", функція повертає масив об'єктів користувачів з
// іменами Ross Vazquez і Elma Head
// Якщо значення параметра color - це "brown", функція повертає масив об'єктів користувачів з
// іменами Blackburn Dotson і Sheree Anthony
// Якщо значення параметра color - це будь - який інший рядок, функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getUsersWithEyeColor = (users, color) => {
//     return users.filter(user => user.eyeColor === color);
// };

// Ця функція приймає масив користувачів users та колір очей color і
// повертає масив користувачів з відповідним кольором очей.

// #23

// Доповни функцію getUsersWithAge(users, minAge, maxAge) таким чином,
//     щоб вона повертала масив користувачів, вік яких(властивість age) потрапляє у проміжок від minAge до maxAge.

// Оголошена змінна getUsersWithAge
// Змінній getUsersWithAge присвоєна стрілочна функція з параметрами(users, minAge, maxAge)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметрів minAge і maxAge дорівнюють 20 і 30 відповідно,
//     функція повертає масив об'єктів користувачів з іменами Ross Vazquez,
//      Elma Head і Carey Barr
// Якщо значення параметрів minAge і maxAge дорівнюють 30 і 40 відповідно,
//     функція повертає масив об'єктів користувачів з іменами Moore Hensley,
//      Sharlene Bush, Blackburn Dotson, Sheree Anthony
// Якщо значення параметрів minAge і maxAge дорівнюють 80 і 100 відповідно,
//     функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithAge = (users, minAge, maxAge) => {

//     return users.filter(user => user.age >= minAge && user.age <= maxAge);

// };
// // Change code above this line

// Ця функція приймає масив користувачів users та межі віку minAge і maxAge і повертає масив користувачів,
//     вік яких потрапляє в задані межі.

// #24

// Доповни функцію getUsersWithFriend(users, friendName) таким чином, щоб вона повертала масив користувачів,
//     у яких є один з ім'ям в параметрі friendName. Масив друзів користувача зберігається у властивості friends.

// Оголошена змінна getUsersWithFriend
// Змінній getUsersWithFriend присвоєна стрілочна функція з параметрами(users, friendName)
// Для перебирання параметра users використовується метод filter()
// Якщо значення параметра friendName - це рядок "Briana Decker", функція повертає масив об'єктів користувачів з
// іменами Sharlene Bush і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Goldie Gentry", функція повертає масив об'єктів користувачів з
// іменами Elma Head і Sheree Anthony
// Якщо значення параметра friendName - це рядок "Adrian Cross", функція повертає порожній масив
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUsersWithFriend = (users, friendName) => {

//     return users.filter(user => user.friends.includes(friendName));

// };
// // Change code above this line

// Ця функція приймає масив користувачів users та ім'я друга friendName. Вона використовує метод filter(),
// щоб відфільтрувати користувачів, у яких є друг з вказаним ім'ям.

// #25

// Доповни функцію getFriends(users) таким чином, щоб вона повертала масив друзів всіх
// користувачів(властивість friends).У декількох користувачів можуть бути однакові друзі,
//     зроби так, щоб масив, що повертається, не містив повторень.

// Оголошена змінна getFriends
// Змінній getFriends присвоєна стрілочна функція з параметром(users)
// Виклик функції із зазначеним масивом користувачів повертає масив["Sharron Pace", "Briana Decker",
//     "Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner", "Goldie Gentry", "Aisha Tran", "Jordan Sampson",
//     "Eddie Strong", "Jacklyn Lucas", "Linda Chapman"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getFriends = (users) => {
//     // Об'єднати всі друзів користувачів в один масив
//     const allFriends = users.flatMap(user => user.friends);

//     // Використовуємо Set для видалення дублікатів
//     const uniqueFriends = [...new Set(allFriends)];

//     return uniqueFriends;
// };
// // Change code above this line

// Ця функція об'єднує всі друзів користувачів в один масив, а потім використовує
// об'єкт Set для видалення дублікатів, а результат конвертує назад в масив.

// #26

// Доповни функцію getActiveUsers(users) таким чином, щоб вона повертала масив активних користувачів,
//     значення властивості isActive яких - true.

// Оголошена змінна getActiveUsers Змінній getActiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з іменами Sharlene Bush,
// Elma Head, Carey Barr і Sheree Anthony
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getActiveUsers = (users) => {
//     return users.filter(user => user.isActive);
// };
// // Change code above this line

// Ця функція використовує метод filter для відфільтрування користувачів зі значенням isActive, яке дорівнює true.

// #27

// Доповни функцію getInactiveUsers(users) таким чином, щоб вона повертала масив неактивних користувачів,
//     значення властивості isActive яких - false.

// Оголошена змінна getInactiveUsers.
// Змінній getInactiveUsers присвоєна стрілочна функція з параметром users
// Для перебирання параметра users використовується метод filter()
// Виклик функції із зазначеним масивом користувачів повертає масив об'єктів користувачів з
// іменами Moore Hensley, Ross Vazquez і Blackburn Dotson
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getInactiveUsers = (users) => {
//     return users.filter(user => !user.isActive);
// };
// // Change code above this line

// Ця функція використовує метод filter для відфільтрування користувачів зі значенням isActive, яке дорівнює false.

// #28

// Використовуючи метод find(), доповни код таким чином, щоб:

// У змінній bookWithTitle утворився об'єкт книги, назва якої (властивість title) збігається
// зі значенням змінної BOOK_TITLE.
// У змінній bookByAuthor утворився об'єкт книги, автор якої (властивість author) збігається
// зі значенням змінної AUTHOR.
// Оголошена змінна books
// Значення змінної books - це масив
// Оголошена змінна BOOK_TITLE
// Значення змінної BOOK_TITLE - це рядок "The Dream of a Ridiculous Man"
// Оголошена змінна AUTHOR
// Значення змінної AUTHOR - це рядок "Robert Sheckley"
// Оголошена змінна bookWithTitle
// Значення змінної bookWithTitle - це об'єкт книги з назвою вище "The Dream of a Ridiculous Man"
// Оголошена змінна bookByAuthor
// Значення змінної bookByAuthor - це об'єкт книги автора "Robert Sheckley"
// Для перебирання масиву books використаний метод find()

// const books = [
//     {
//         title: 'The Last Kingdom',
//         author: 'Bernard Cornwell',
//         rating: 8.38,
//     },
//     {
//         title: 'Beside Still Waters',
//         author: 'Robert Sheckley',
//         rating: 8.51,
//     },
//     {
//         title: 'The Dream of a Ridiculous Man',
//         author: 'Fyodor Dostoevsky',
//         rating: 7.75,
//     },
//     { title: 'Redder Than Blood', author: 'Tanith Lee', rating: 7.94 },
// ];
// const BOOK_TITLE = 'The Dream of a Ridiculous Man';
// const AUTHOR = 'Robert Sheckley';
// // Change code below this line

// const bookWithTitle = books.find(book => book.title === BOOK_TITLE);
// const bookByAuthor = books.find(book => book.author === AUTHOR);

// У вас буде об'єкт bookWithTitle, який міститиме знайдену книгу за назвою,
// і об'єкт bookByAuthor, який міститиме знайдену книгу за автором.

// #29

// Доповни функцію getUserWithEmail(users, email) таким чином, щоб вона повертала об'єкт користувача,
// пошта якого(властивість email) збігається зі значенням параметра email.

// Оголошена функція getUserWithEmail(users, email)

// Для перебирання параметра users використовується метод find()

// Якщо значення параметра email - це "shereeanthony@kog.com", функція повертає об'єкт користувача з
// ім'ям Sheree Anthony

// Якщо значення параметра email - це "elmahead@omatom.com", функція повертає об'єкт користувача з
// ім'ям Elma Head

// Якщо значення параметра email - це "blackburndotson@furnigeer.com", функція повертає об'єкт користувача з
// ім'ям Blackburn Dotson

// Якщо в масиві users відсутній користувач з поштою із параметра email, функція повертає undefined

// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getUserWithEmail = (users, email) => users.find(user => user.email === email);
// // Change code above this line

// Ця функція приймає масив користувачів і рядок email, і використовує метод find() для пошуку користувача з
// відповідним email.Якщо користувач знайдений, функція повертає його об'єкт. Якщо жоден користувач не знайдений,
// вона повертає undefined.

// #30

// Використовуючи метод every(), доповни код таким чином, щоб:

// У змінній eachElementInFirstIsEven був результат перевірки всіх елементів масиву firstArray на парність.
// У змінній eachElementInFirstIsOdd був результат перевірки всіх елементів масиву firstArray на непарність.
// У змінній eachElementInSecondIsEven був результат перевірки всіх елементів масиву secondArray на парність.
// У змінній eachElementInSecondIsOdd був результат перевірки всіх елементів масиву secondArray на непарність.
// У змінній eachElementInThirdIsEven був результат перевірки всіх елементів масиву thirdArray на парність.
// У змінній eachElementInThirdIsOdd був результат перевірки всіх елементів масиву thirdArray на непарність.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив [26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив [17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив [17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна eachElementInFirstIsEven
// Значення змінної eachElementInFirstIsEven - це буль true
// Оголошена змінна eachElementInFirstIsOdd
// Значення змінної eachElementInFirstIsOdd - це буль false
// Оголошена змінна eachElementInSecondIsEven
// Значення змінної eachElementInSecondIsEven - це буль false
// Оголошена змінна eachElementInSecondIsOdd
// Значення змінної eachElementInSecondIsOdd - це буль true
// Оголошена змінна eachElementInThirdIsEven
// Значення змінної eachElementInThirdIsEven - це буль false
// Оголошена змінна eachElementInThirdIsOdd
// Значення змінної eachElementInThirdIsOdd - це буль false
// Для перебирання масивів використаний метод every()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(number => number % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(number => number % 2 !== 0);
// const eachElementInSecondIsEven = secondArray.every(number => number % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(number => number % 2 !== 0);
// const eachElementInThirdIsEven = thirdArray.every(number => number % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(number => number % 2 !== 0);

// У цьому коді every() перевіряє кожен елемент масиву відповідно до вказаних умов(парності або непарності) і
//  повертає true, якщо всі елементи задовольняють умову, або false, якщо хоча б один елемент не задовольняє умову.

// #31

// Доповни функцію isEveryUserActive(users) таким чином, щоб вона перевіряла,
//     чи всі користувачі зараз активні(властивість isActive) і повертала true або false.

// Оголошена змінна isEveryUserActive
// Змінній isEveryUserActive присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод every()
// Виклик функції із зазначеним масивом користувачів повертає false
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const isEveryUserActive = users => {
//     return users.every(user => user.isActive);
// };

// // Приклад виклику функції з вказаним масивом користувачів:
// const users = [
//     { name: "User 1", isActive: true },
//     { name: "User 2", isActive: false },
//     { name: "User 3", isActive: true },
// ];

// const result = isEveryUserActive(users);
// console.log(result); // Поверне false, оскільки не всі користувачі активні.
// // Change code above this line

// Функція isEveryUserActive приймає масив користувачів users і використовує метод every(),
//     щоб перевірити, чи всі користувачі мають властивість isActive встановлену на true.
//     Якщо всі користувачі активні, функція поверне true, інакше поверне false.

// #32

// Використовуючи метод some(), доповни код таким чином, щоб:

// У змінній anyElementInFirstIsEven був результат перевірки наявності парних елементів в масиві firstArray.
// У змінній anyElementInFirstIsOdd був результат перевірки наявності непарних елементів в масиві firstArray.
// У змінній anyElementInSecondIsEven був результат перевірки наявності парних елементів в масиві secondArray.
// У змінній anyElementInSecondIsOdd був результат перевірки наявності непарних елементів в масиві secondArray.
// У змінній anyElementInThirdIsEven був результат перевірки наявності парних елементів в масиві thirdArray.
// У змінній anyElementInThirdIsOdd був результат перевірки наявності непарних елементів в масиві thirdArray.
// Оголошена змінна firstArray
// Значення змінної firstArray - це масив[26, 94, 36, 18]
// Оголошена змінна secondArray
// Значення змінної secondArray - це масив[17, 61, 23]
// Оголошена змінна thirdArray
// Значення змінної thirdArray - це масив[17, 26, 94, 61, 36, 23, 18]
// Оголошена змінна anyElementInFirstIsEven
// Значення змінної anyElementInFirstIsEven - це буль true
// Оголошена змінна anyElementInFirstIsOdd
// Значення змінної anyElementInFirstIsOdd - це буль false
// Оголошена змінна anyElementInSecondIsEven
// Значення змінної anyElementInSecondIsEven - це буль false
// Оголошена змінна anyElementInSecondIsOdd
// Значення змінної anyElementInSecondIsOdd - це буль true
// Оголошена змінна anyElementInThirdIsEven
// Значення змінної anyElementInThirdIsEven - це буль true
// Оголошена змінна anyElementInThirdIsOdd
// Значення змінної anyElementInThirdIsOdd - це буль true
// Для перебирання масивів використаний метод some()

// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change below this line

// const anyElementInFirstIsEven = firstArray.some(item => item % 2 === 0);
// const anyElementInFirstIsOdd = firstArray.some(item => item % 2 !== 0);
// const anyElementInSecondIsEven = secondArray.some(item => item % 2 === 0);
// const anyElementInSecondIsOdd = secondArray.some(item => item % 2 !== 0);
// const anyElementInThirdIsEven = thirdArray.some(item => item % 2 === 0);
// const anyElementInThirdIsOdd = thirdArray.some(item => item % 2 !== 0);

// console.log(anyElementInFirstIsEven); // true
// console.log(anyElementInFirstIsOdd); // false
// console.log(anyElementInSecondIsEven); // false
// console.log(anyElementInSecondIsOdd); // true
// console.log(anyElementInThirdIsEven); // true
// console.log(anyElementInThirdIsOdd); // true

// У цьому коді ми використовуємо метод some() для перевірки наявності певних елементів у масивах.some() повертає
// true, якщо принаймні один елемент у масиві задовольняє вказаній умові, і false,
//     якщо жоден елемент не відповідає умові.

// #33

// Доповни функцію isAnyUserActive(users) таким чином, щоб вона перевіряла наявність активних
// користувачів(властивість isActive) і повертала true або false.

// Оголошена функція isAnyUserActive(users)
// Для перебирання параметра users використовується метод some()
// Виклик функції із зазначеним масивом користувачів повертає true
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const isAnyUserActive = (users) => {
//     return users.some(user => user.isActive);
// };

// // Приклад виклику функції зі зразковим масивом користувачів:
// const sampleUsers = [
//     { name: 'User 1', isActive: true },
//     { name: 'User 2', isActive: false },
//     { name: 'User 3', isActive: true }
// ];

// const result = isAnyUserActive(sampleUsers);
// console.log(result); // Виведе true, оскільки є активний користувач
// // Change code above this line

// Ця функція перевіряє, чи хоча б один користувач в масиві є активним(має властивість isActive зі значенням true).
// Якщо такий користувач є, функція повертає true, інакше вона повертає false.
// Ви можете використовувати цю функцію з будь - яким масивом користувачів для перевірки
// наявності активних користувачів.

// #34

// Ігровому сервісу необхідний функціонал підрахунку середнього часу, проведеного в іграх.
// Доповни код таким чином, щоб у змінній totalPlayTime вийшло загальний ігровий час з масиву playtimes.

// Оголошена змінна players
// Значення змінної players - це об'єкт гравців з ігровим часом кожного
// Оголошена змінна playtimes
// Значення змінної playtimes - це масив[1270, 468, 710, 244]
// Оголошена змінна totalPlayTime
// Значення змінної totalPlayTime - це число 2692
// Для перебирання масиву playtimes використовується метод reduce()
// Оголошена змінна averagePlayTime
// Значення змінної averagePlayTime - це число 673

// const players = {
//     mango: 1270,
//     poly: 468,
//     ajax: 710,
//     kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, time) => total + time, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime); // Output: 2692
// console.log(averagePlayTime); // Output: 673

// Ми використовуємо метод reduce() для підрахунку загального ігрового часу у масиві playtimes.
// Параметр total у функції reduce() представляє активне накопичення(у нашому випадку загальний ігровий час),
//     а параметр time - поточний елемент масиву, який додається до активного накопичення.
//     У результаті ми отримуємо totalPlayTime, який дорівнює загальному ігровому часу з масиву.

// Середній ігровий час обчислюється поділенням totalPlayTime на кількість елементів у масиві playtimes.

// #35

// Нашому сервісу необхідно розрахувати середній час, проведений в одній грі для кожного гравця,
//     і отримати загальну суму цих значень часу.Розрахувати час для кожного з гравців можна,
//         розділивши його час(властивість playtime) на кількість ігор(властивість gamesPlayed).

// Оголошена змінна players
// Значення змінної players - це масив об'єктів гравців
// Оголошена змінна totalAveragePlaytimePerGame
// Значення змінної totalAveragePlaytimePerGame - це число 1023
// Для перебирання масиву players використовується метод reduce()

// const players = [
//     { name: "Mango", playtime: 1270, gamesPlayed: 4 },
//     { name: "Poly", playtime: 469, gamesPlayed: 2 },
//     { name: "Ajax", playtime: 690, gamesPlayed: 3 },
//     { name: "Kiwi", playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce((total, player) => {
//     const averagePlaytime = player.playtime / player.gamesPlayed;
//     return total + averagePlaytime;
// }, 0);

// console.log(totalAveragePlaytimePerGame); // Output: 1023

// Цей код перебирає масив players, обчислює середній час для кожного гравця і
// додає його до totalAveragePlaytimePerGame.

// #36

// Доповни функцію calculateTotalBalance(users) таким чином, щоб вона рахувала і
// повертала суму всіх коштів(властивість balance), які зберігають користувачі з масиву users.

// Оголошена змінна calculateTotalBalance
// Змінній calculateTotalBalance присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 20916
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const calculateTotalBalance = users => {
//     return users.reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// // Приклад користувачів (передайте ваш власний масив користувачів)
// const users = [
//     { name: "John", balance: 1000 },
//     { name: "Alice", balance: 1500 },
//     { name: "Bob", balance: 2000 },
// ];

// const totalBalance = calculateTotalBalance(users);
// console.log(totalBalance); // Output: 4500
// // Change code above this line

// Вам потрібно передати свій власний масив користувачів у функцію calculateTotalBalance.

// #37

// Доповни функцію getTotalFriendCount(users) таким чином, щоб вона рахувала і
// повертала загальну кількість друзів(властивість friends) усіх користувачів з масиву users.

// Оголошена змінна getTotalFriendCount
// Змінній getTotalFriendCount присвоєна стрілочна функція з параметром(users)
// Для перебирання параметра users використовується метод reduce()
// Виклик функції із зазначеним масивом користувачів повертає число 14
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getTotalFriendCount = users => {
//     return users.reduce((totalFriends, user) => totalFriends + user.friends.length, 0);
// };

// // Приклад користувачів (передайте ваш власний масив користувачів)
// const users = [
//     { name: "John", friends: ["Alice", "Bob"] },
//     { name: "Alice", friends: ["John", "Bob", "Charlie"] },
//     { name: "Bob", friends: ["John", "Alice"] },
// ];

// const totalFriendCount = getTotalFriendCount(users);
// console.log(totalFriendCount); // Output: 6
// // Change code above this line

// Вам потрібно передати свій власний масив користувачів у функцію getTotalFriendCount.

// #38

// Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла копія масиву releaseDates,
//     відсортована за зростанням, а у змінній alphabeticalAuthors - копія масиву імен авторів authors,
//         відсортована за алфавітом.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна authors
// Значення змінної authors - це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky"]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна alphabeticalAuthors
// Значення змінної alphabeticalAuthors - це масив["Bernard Cornwell", "Tanith Lee", "Robert Sheckley",
//     "Fyodor Dostoevsky"]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
// ];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);
// const alphabeticalAuthors = [...authors].sort();

// console.log(ascendingReleaseDates);
// console.log(alphabeticalAuthors);

// Ми використали оператор спреду([...releaseDates] та[...authors]) для створення копій масивів,
//     щоб не змінювати оригінальні масиви.Потім ми використали метод sort для сортування за зростанням для
//     числового масиву ascendingReleaseDates та за алфавітом для масиву рядків alphabeticalAuthors.

// #39

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за датою видання,
//     за її зростанням або спаданням.Доповни код таким чином, щоб у змінній ascendingReleaseDates вийшла
//     копія масиву releaseDates, відсортована за зростанням, а у змінній descendingReleaseDates - копія,
//     відсортована за спаданням.

// Оголошена змінна releaseDates
// Значення змінної releaseDates - це масив[2016, 1967, 2008, 1984, 1973, 2012, 1997]
// Оголошена змінна ascendingReleaseDates
// Значення змінної ascendingReleaseDates - це масив[1967, 1973, 1984, 1997, 2008, 2012, 2016]
// Оголошена змінна descendingReleaseDates
// Значення змінної descendingReleaseDates - це масив[2016, 2012, 2008, 1997, 1984, 1973, 1967]
// Використаний метод sort()

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// // Change code below this line

// const ascendingReleaseDates = [...releaseDates].sort((a, b) => a - b);

// const descendingReleaseDates = [...releaseDates].sort((a, b) => b - a);

// console.log(ascendingReleaseDates);
// console.log(descendingReleaseDates);

// Ми створили копії масиву releaseDates, і в першому випадку ми використали порівняння(a, b) => a - b,
//     щоб відсортувати за зростанням, а вдругому випадку - порівняння(a, b) => b - a, щоб відсортувати за спаданням.

// #40

// Онлайн бібіліотеці необхідно відображати книги, відсортовані за автором, в алфавітному і
// зворотному алфавітному порядку.Доповни код таким чином, щоб у змінній authorsInAlphabetOrder вийшла
// копія масиву authors, відсортована за алфавітом, а у змінній authorsInReversedOrder - копія,
//     відсортована у зворотному алфавітному порядку.

// Оголошена змінна authors
// Значення змінної authors - це масив["Tanith Lee", "Bernard Cornwell", "Robert Sheckley", "Fyodor Dostoevsky",
//     "Howard Lovecraft"]
// Оголошена змінна authorsInAlphabetOrder
// Значення змінної authorsInAlphabetOrder - це масив["Bernard Cornwell", "Fyodor Dostoevsky", "Howard Lovecraft",
//     "Robert Sheckley", "Tanith Lee"]
// Оголошена змінна authorsInReversedOrder
// Значення змінної authorsInReversedOrder - це масив["Tanith Lee", "Robert Sheckley", "Howard Lovecraft",
//     "Fyodor Dostoevsky", "Bernard Cornwell"]
// Використаний метод sort()

// const authors = [
//     "Tanith Lee",
//     "Bernard Cornwell",
//     "Robert Sheckley",
//     "Fyodor Dostoevsky",
//     "Howard Lovecraft",
// ];
// // Change code below this line

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));

// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));

// console.log(authorsInAlphabetOrder);
// console.log(authorsInReversedOrder);

// Ми створили копії масиву authors і використали метод localeCompare,
//     щоб відсортувати їх за алфавітом(або у зворотному алфавітному порядку).

// #41

// Доповни код таким чином, щоб:

// У змінній sortedByAuthorName вийшов масив книг, відсортований за ім'ям автора в алфавітному порядку.
// У змінній sortedByReversedAuthorName вийшов масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку.
// У змінній sortedByAscendingRating вийшов масив книг, відсортований за зростанням рейтингу.
// У змінній sortedByDescentingRating вийшов масив книг, відсортований за спаданням рейтингу.
// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів книг
// Оголошена змінна sortedByAuthorName
// Значення змінної sortedByAuthorName - це масив книг, відсортований за ім'ям автора в алфавітному порядку
// Оголошена змінна sortedByReversedAuthorName
// Значення змінної sortedByReversedAuthorName - це масив книг, відсортований за ім'ям автора у зворотному алфавітному порядку
// Оголошена змінна sortedByAscendingRating
// Значення змінної sortedByAscendingRating - це масив книг, відсортований за зростанням рейтингу
// Оголошена змінна sortedByDescentingRating
// Значення змінної sortedByDescentingRating - це масив книг, відсортований за спаданням рейтингу
// Для перебирання масиву books використовується метод sort()

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];
// // Change code below this line

// const sortedByAuthorName = [...books].sort((a, b) => a.author.localeCompare(b.author));

// const sortedByReversedAuthorName = [...books].sort((a, b) => b.author.localeCompare(a.author));

// const sortedByAscendingRating = [...books].sort((a, b) => a.rating - b.rating);

// const sortedByDescentingRating = [...books].sort((a, b) => b.rating - a.rating);

// console.log(sortedByAuthorName);
// console.log(sortedByReversedAuthorName);
// console.log(sortedByAscendingRating);
// console.log(sortedByDescentingRating);

// Цей код створює копії масиву books та використовує метод sort з відповідними функціями порівняння для
// сортування усіх потрібних напрямків.

// #42

// Доповни функцію sortByAscendingBalance(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за зростанням їх балансу(властивість balance).

// Оголошена змінна sortByAscendingBalance
// Змінній sortByAscendingBalance присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
//     відсортований за зростанням їх балансу
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення
// Для перебирання параметра users використаний метод sort()

// // Change code below this line
// const sortByAscendingBalance = (users) => {
//     // Створюємо новий масив для уникнення змін в оригінальному масиві
//     const sortedUsers = [...users];

//     // Використовуємо метод sort() для сортування за зростанням балансу
//     sortedUsers.sort((a, b) => a.balance - b.balance);

//     return sortedUsers;
// };

// // Приклад використання:
// const users = [
//     { name: "Alice", balance: 100 },
//     { name: "Bob", balance: 50 },
//     { name: "Charlie", balance: 75 },
// ];

// const sortedUsers = sortByAscendingBalance(users);
// console.log(sortedUsers);
// // Change code above this line

// Ця функція створює копію вхідного масиву користувачів,
//     сортує її за зростанням балансу і повертає відсортований масив користувачів.

// #43

// Доповни функцію sortByDescendingFriendCount(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за спаданням кількості їхніх друзів(властивість friends).

// Оголошена змінна sortByDescendingFriendCount
// Змінній sortByDescendingFriendCount присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
//     відсортований за спаданням кількості їхніх друзів
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const sortByDescendingFriendCount = (users) => {
//     // Створюємо новий масив для уникнення змін в оригінальному масиві
//     const sortedUsers = [...users];

//     // Використовуємо метод sort() для сортування за спаданням кількості друзів
//     sortedUsers.sort((a, b) => b.friends.length - a.friends.length);

//     return sortedUsers;
// };

// // Приклад використання:
// const users = [
//     { name: "Alice", friends: ["Bob", "Charlie"] },
//     { name: "Bob", friends: ["Alice"] },
//     { name: "Charlie", friends: ["Alice", "Bob", "David"] },
//     { name: "David", friends: ["Charlie"] },
// ];

// const sortedUsers = sortByDescendingFriendCount(users);
// console.log(sortedUsers);
// // Change code above this line

// Ця функція створює копію вхідного масиву користувачів, сортує її за спаданням кількості друзів і
//  повертає відсортований масив користувачів.

// #44

// Доповни функцію sortByName(users) таким чином, щоб вона повертала масив користувачів,
//     відсортований за їх ім'ям (властивість name) в алфавітному порядку.

// Оголошена змінна sortByName
// Змінній sortByName присвоєна стрілочна функція з параметром(users)
// Значення параметра users не змінюється
// Для перебирання параметра users використаний метод sort()
// Виклик функції із зазначеним масивом користувачів повертає новий масив користувачів,
//     відсортований за ім'ям в алфавітному порядку
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const sortByName = (users) => {
//     // Створюємо новий масив для уникнення змін в оригінальному масиві
//     const sortedUsers = [...users];

//     // Використовуємо метод sort() для сортування за ім'ям в алфавітному порядку
//     sortedUsers.sort((a, b) => a.name.localeCompare(b.name));

//     return sortedUsers;
// };

// // Приклад використання:
// const users = [
//     { name: "Alice" },
//     { name: "Bob" },
//     { name: "Charlie" },
//     { name: "David" },
// ];

// const sortedUsers = sortByName(users);
// console.log(sortedUsers);
// // Change code above this line

// Ця функція створює копію вхідного масиву користувачів, сортує її за ім'ям в алфавітному
// порядку та повертає відсортований масив користувачів.

// #45

// Доповни код таким чином, щоб у змінній names вийшов масив імен авторів в алфавітному порядку,
//     рейтинг книг яких більший за значення змінної MIN_BOOK_RATING.

// Оголошена змінна books
// Значення змінної books - це вихідний масив об'єктів
// Оголошена змінна MIN_BOOK_RATING
// Значення змінної MIN_BOOK_RATING - це число 8
// Оголошена змінна names
// Значення змінної names - це масив["Bernard Cornwell", "Howard Lovecraft", "Robert Sheckley"]
// Відсутні оголошені змінні, крім books, MIN_BOOK_RATING і names
// Використовується ланцюжок методів filter, map, sort

// const books = [
//     {
//         title: "The Last Kingdom",
//         author: "Bernard Cornwell",
//         rating: 8.38,
//     },
//     {
//         title: "Beside Still Waters",
//         author: "Robert Sheckley",
//         rating: 8.51,
//     },
//     {
//         title: "The Dream of a Ridiculous Man",
//         author: "Fyodor Dostoevsky",
//         rating: 7.75,
//     },
//     { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//     {
//         title: "The Dreams in the Witch House",
//         author: "Howard Lovecraft",
//         rating: 8.67,
//     },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = books
//     .filter((book) => book.rating > MIN_BOOK_RATING) // Фільтруємо за рейтингом
//     .map((book) => book.author) // Витягуємо імена авторів
//     .sort(); // Сортуємо за ім'ям в алфавитному порядку

// console.log(names);

// Цей код витягне імена авторів книг з рейтингом вищим за MIN_BOOK_RATING,
//     а потім відсортує їх в алфавітному порядку.

// #46

// Доповни функцію getNamesSortedByFriendCount(users) таким чином, щоб вона повертала масив імен користувачів,
//     відсортований за зростанням кількості їхніх друзів(властивість friends).

// Оголошена змінна getNamesSortedByFriendCount
// Змінній getNamesSortedByFriendCount присвоєна стрілочна функція з параметром(users)
// У тілі функції використовується ланцюжок методів
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив["Moore Hensley", "Sharlene Bush",
//     "Elma Head", "Sheree Anthony", "Ross Vazquez", "Carey Barr", "Blackburn Dotson"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getNamesSortedByFriendCount = users => {
//     return [...users] // Клонуємо масив користувачів, щоб не змінювати оригінальний
//         .sort((a, b) => a.friends.length - b.friends.length) // Сортуємо за кількістю друзів
//         .map(user => user.name); // Витягуємо імена користувачів
// };

// // Приклад використання:
// const users = [
//     {
//         name: "Moore Hensley",
//         friends: ["Sharlene Bush", "Elma Head", "Carey Barr"],
//     },
//     {
//         name: "Sharlene Bush",
//         friends: ["Moore Hensley", "Blackburn Dotson", "Briana Decker"],
//     },
//     // Додайте інших користувачів тут
// ];

// const sortedNames = getNamesSortedByFriendCount(users);
// console.log(sortedNames);

// // Change code above this line

// Цей код створює копію масиву users, сортує цю копію за кількістю друзів і
// повертає імена користувачів цієї відсортованої копії.

// #47

// Доповни функцію getSortedFriends(users) таким чином, щоб вона повертала масив унікальних
// імен друзів(властивість friends), відсортований за алфавітом.

// Оголошена змінна getSortedFriends
// Змінній getSortedFriends присвоєна стрілочна функція з параметром(users)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Виклик функції із зазначеним масивом користувачів повертає масив["Adrian Cross", "Aisha Tran",
//     "Briana Decker", "Eddie Strong", "Goldie Gentry", "Jacklyn Lucas", "Jordan Sampson",
//     "Linda Chapman", "Marilyn Mcintosh", "Naomi Buckner", "Padilla Garrison", "Sharron Pace", "Solomon Fokes"]
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// // Change code below this line
// const getSortedFriends = users => {
//     return users
//         .flatMap(user => user.friends) // Об'єднуємо всіх друзів в один масив
//         .filter((friend, index, arr) => arr.indexOf(friend) === index) // Видаляємо дублікати
//         .sort(); // Сортуємо за алфавітом
// };
// // Change code above this line

// Ця функція об'єднує всіх друзів з усіх користувачів в один масив,
// видаляє дублікати та сортує результат за алфавітом.

// #48

// Доповни функцію getTotalBalanceByGender(users, gender) таким чином, щоб вона повертала загальний 
// баланс користувачів(властивість balance), стать яких(властивість gender) збігається зі значенням параметра gender.

// Оголошена змінна getTotalBalanceByGender
// Змінній getTotalBalanceByGender присвоєна стрілочна функція з параметрами(users, gender)
// У тілі функції використовується ланцюжок методів в правильному порядку
// Значення параметра users не змінюється
// Якщо значення параметра gender - це рядок "male", функція повертає число 12053
// Якщо значення параметра gender - це рядок "female", функція повертає число 8863
// Виклик функції з випадковими, але валідними аргументами, повертає правильне значення

// const getTotalBalanceByGender = (users, gender) => {
//     return users
//         .filter(user => user.gender === gender)
//         .reduce((totalBalance, user) => totalBalance + user.balance, 0);
// };

// // Приклад використання:
// const users = [
//     { name: "Alice", gender: "female", balance: 1000 },
//     { name: "Bob", gender: "male", balance: 1500 },
//     { name: "Charlie", gender: "male", balance: 2000 },
//     { name: "David", gender: "male", balance: 1200 },
//     { name: "Eve", gender: "female", balance: 1800 },
// ];

// const totalBalanceMale = getTotalBalanceByGender(users, "male");
// console.log(totalBalanceMale); // Повинно вивести 4700

// const totalBalanceFemale = getTotalBalanceByGender(users, "female");
// console.log(totalBalanceFemale); // Повинно вивести 2800

// Ця функція фільтрує користувачів за заданою статтю,
//     потім обчислює загальний баланс за допомогою методу reduce().