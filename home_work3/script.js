// Home work 3

// #1

// Присвой змінній apartment об'єкт, який описує квартиру з наступними характеристиками:

// imgUrl - фотографія, значення "https://via.placeholder.com/640x480";
// descr - опис, значення "Spacious apartment in the city center";
// rating - рейтинг, значення 4;
// price - ціна, значення 2153;
// tags - метаінформація, масив["premium", "promoted", "top"].

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Об'єкт містить властивість imgUrl
// Значення властивості imgUrl - це рядок "https://via.placeholder.com/640x480"
// Об'єкт містить властивість descr
// Значення властивості descr - це рядок "Spacious apartment in the city center"
// Об'єкт містить властивість rating
// Значення властивості rating - це число 4
// Об'єкт містить властивість price
// Значення властивості price - це число 2153
// Об'єкт містить властивість tags
// Значення властивості tags - це масив["premium", "promoted", "top"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"]
// };

// console.log(apartment);

// У цьому коді ми створили об'єкт apartment, який містить властивості imgUrl,
// descr, rating, price та tags з відповідними значеннями.

// #2

// Доповни об'єкт квартири властивістю owner, значенням якого буде об'єкт з інформацією про власника.
// Додай йому наступні властивості:

// name - ім'я власника, значення "Henry";
// phone - телефон, значення "982-126-1588";
// email - пошта, значення "henry.carter@aptmail.com".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// В об'єкта змінної apartment присутні властивості imgUrl, descr, rating, price і tags зі значеннями
// В об'єкті apartment присутня властивість owner
// Значення властивості owner - це об'єкт
// В об'єкті owner присутня властивість name
// Значення властивості name - це "Henry"
// В об'єкті owner присутня властивість phone
// Значення властивості phone - це "982-126-1588"
// В об'єкті owner присутня властивість email
// Значення властивості email - це "henry.carter@aptmail.com"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com"
//     }
// };

// console.log(apartment);

// Тепер об'єкт apartment має властивість owner, яка містить інформацію про власника з ім'ям,
//     телефоном і адресою електронної пошти.

// #3

// Перший спосіб отримати доступ до властивості об'єкта - це синтаксис об'єкт.ключ_властивості.
// Здебільшого використовується синтаксис «через крапку» і підходить тоді,
//     коли ми заздалегідь знаємо ім'я (ключ) властивості, до якої хочемо отримати доступ.

// На місце звернення буде повернуте значення властивості з таким ім'ям.
// Якщо в об'єкті відсутня властивість з таким ім'ям, на місце звернення повернеться undefined.

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment.rating;
// const aptDescr = apartment.descr;
// const aptPrice = apartment.price;
// const aptTags = apartment.tags;
// // Change code above this line

// Тепер змінні aptRating, aptDescr, aptPrice, і aptTags містять відповідні значення з об'єкта apartment.

// #4

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment.

// ownerName - ім'я власника;
// ownerPhone - телефон власника;
// ownerEmail - пошта власника;
// numberOfTags - кількість елементів масиву у властивості tags;
// firstTag - перший елемент масиву у властивості tags;
// lastTag - останній елемент масиву у властивості tags.

// Оголошена змінна apartment за допомогою const
//     Значення змінної apartment - це об'єкт
// Оголошена змінна ownerName за допомогою const
//     Значення змінної ownerName - це рядок "Henry"
// Оголошена змінна ownerPhone за допомогою const
//     Значення змінної ownerPhone - це "982-126-1588"
// Оголошена змінна ownerEmail за допомогою const
//     Значення змінної ownerEmail - це "henry.carter@aptmail.com"
// Оголошена змінна numberOfTags за допомогою const
//     Значення змінної numberOfTags - це 3
// Оголошена змінна firstTag за допомогою const
//     Значення змінної firstTag - це "premium"
// Оголошена змінна lastTag за допомогою const
//     Значення змінної lastTag - це "top"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// // Change code above this line

// Для присвоєння значень оголошеним змінним звернемося до відповідних властивостей
// об'єкта apartment та здійснимо обчислення кількості елементів масиву у властивості tags.
// Тепер змінні ownerName, ownerPhone, ownerEmail, numberOfTags, firstTag,
//     і lastTag містять відповідні значення з об'єкта apartment.

// #5

// Доповни код, присвоївши оголошеним змінним вирази звернення до відповідних властивостей об'єкта apartment,
// використовуючи синтаксис «квадратних дужок».

// aptRating - рейтинг;
// aptDescr - опис;
// aptPrice - ціна;
// aptTags - теги.
// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна aptRating
// Значення змінної aptRating - це 4
// Оголошена змінна aptDescr
// Значення змінної aptDescr - це "Spacious apartment in the city center"
// Оголошена змінна aptPrice
// Значення змінної aptPrice - це 2153
// Оголошена змінна aptTags
// Значення змінної aptTags - це["premium", "promoted", "top"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
// };

// // Change code below this line
// const aptRating = apartment['rating'];
// const aptDescr = apartment['descr'];
// const aptPrice = apartment['price'];
// const aptTags = apartment['tags'];
// // Change code above this line

// Для присвоєння значень оголошеним змінним використаємо синтаксис «квадратних дужок», як це показано.apartmen
// Тепер змінні aptRating, aptDescr, aptPrice і aptTags містять відповідні значення з об'єкта apartment.

// #6

// Доповни код, оновивши значення властивостей об'єкта apartment:

// ціну у властивості price на 5000;
// рейтинг квартири у властивості rating на 4.7;
// ім'я власника у вкладеній властивості name на "Henry Sibola";
// масив тегів у властивості tags, додавши в кінець рядок "trusted".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості price - це число 5000
// Значення вкладеної властивості rating - це число 4.7
// Значення вкладеної властивості name - це рядок "Henry Sibola"
// Значення вкладеної властивості tags - це масив["premium", "promoted", "top", "trusted"]

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
//     tags: ["premium", "promoted", "top"],
//     owner: {
//         name: "Henry",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line

// apartment.price = 5000;
// apartment.rating = 4.7;
// apartment.owner.name = "Henry Sibola";
// apartment.tags.push("trusted");

// #7

// Додай об'єкту apartment кілька нових властивостей:

// area - площа в квадратних метрах, число 60;
// rooms - кількість кімнат, число 3;
// location - місце розташування квартири, об'єкт з наступними вкладеними властивостями;
// country - країна, рядок "Jamaica";
// city - місто, рядок "Kingston".

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Значення вкладеної властивості area - це число 60
// Значення вкладеної властивості rooms - це число 3
// Значення вкладеної властивості location - це об'єкт
// Значення вкладеної властивості location.country - це рядок "Jamaica"
// Значення вкладеної властивості location.city - це рядок "Kingston"

// const apartment = {
//     imgUrl: "https://via.placeholder.com/640x480",
//     descr: "Spacious apartment in the city center",
//     rating: 4.7,
//     price: 5000,
//     tags: ["premium", "promoted", "top", "trusted"],
//     owner: {
//         name: "Henry Sibola",
//         phone: "982-126-1588",
//         email: "henry.carter@aptmail.com",
//     },
// };

// // Change code below this line

// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = { country: "Jamaica", city: "Kingston" };

// #8

// Доповни код оголошення об'єкта таким чином, щоб у нього були властивості name, price, image і tags зі
// значеннями зі змінних з аналогічними іменами.Обов'язково використовуй синтаксис коротких властивостей.

// Оголошена змінна product
// Значення змінної product - це об'єкт
// Значення вкладеної властивості name - це рядок "Repair Droid"
// Значення вкладеної властивості price - це число 2500
// Значення вкладеної властивості image - це рядок "https://via.placeholder.com/640x480"
// Значення вкладеної властивості tags - це масив["on sale", "trending", "best buy"]

// const name = "Repair Droid";
// const price = 2500;
// const image = "https://via.placeholder.com/640x480";
// const tags = ["on sale", "trending", "best buy"];

// const product = {
//     // Change code below this line

//     name, price, image, tags,

    // Change code above this line
// };

// #9

// Доповни код оголошення об'єкта credentials таким чином, щоб в результаті у нього були дві
// властивості: email і password, імена яких зберігаються у змінних emailInputName і passwordInputName.

// Значенням властивості email повинен бути рядок "henry.carter@aptmail.com", а значенням
// властивості password - рядок "jqueryismyjam".

// Оголошена змінна credentials
// Значення змінної credentials - це об'єкт
// Об'єкт credentials містить властивість email
// Значення вкладеної властивості email - це рядок "henry.carter@aptmail.com"
// Об'єкт credentials містить властивість password
// Значення вкладеної властивості password - це рядок "jqueryismyjam"

// const emailInputName = "email";
// const passwordInputName = "password";

// const credentials = {
//     // Change code below this line

//     [emailInputName]: "henry.carter@aptmail.com",
//     [passwordInputName]: "jqueryismyjam",

//     // Change code above this line
// };

// #10

// Перебери об'єкт apartment, використовуючи цикл for...in, і запиши в масив keys всі його ключі,
//  а в масив values всі значення його властивостей.

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153]

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };

// const keys = [];
// const values = [];

// for (let key in apartment) {
// keys.push(key);
// values.push(apartment[key]);
// }

// console.log(keys);
// console.log(values);

// Ось код, який перебирає об'єкт apartment і записує його ключі у масив keys і
//  значення властивостей у масив values.
//  Тепер масив keys містить ключі об'єкта, а масив values містить відповідні значення властивостей.

// #11

// Виконай рефакторинг рішення попереднього завдання, додавши в цикл for...in перевірку на власну властивість.

// Оголошена змінна advert.
// Значення змінної advert - це об'єкт.
// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].

// const keys = [];
// const values = [];
// const advert = {
//     service: "apt",
// };
// const apartment = Object.create(advert);
// apartment.descr = "Spacious apartment in the city center";
// apartment.rating = 4;
// apartment.price = 2153;

// for (const key in apartment) {
//     // Change code below this line

//     if (apartment.hasOwnProperty(key)) {
//         keys.push(key);
//         values.push(apartment[key]);
//     }
//     // Change code above this line
// }

// console.log(keys);   // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// В даному коді ми використали метод hasOwnProperty для перевірки наявності властивості в об'єкті apartment.

// #12

// Напиши функцію countProps(object), яка рахує і повертає кількість власних властивостей об'єкта в параметрі
// object.Використовуй змінну propCount для зберігання кількості властивостей об'єкта.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line

//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }

//     // Change code above this line
//     return propCount;
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// Ця функція перебирає всі ключі в об'єкті та використовує метод hasOwnProperty,
// щоб перевірити, чи є ключ власністю об'єкта.Якщо так, то збільшується лічильник propCount.

// #13

// Перебери об'єкт apartment, використовуючи метод Object.keys() і цикл for...of.
// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, і
// додай в масив values всі значення його властивостей.

// Оголошена змінна apartment.
// Значення змінної apartment - це об'єкт.
// Оголошена змінна keys.
// Значення змінної keys - це масив["descr", "rating", "price"].
// Значення змінної keys отримане за допомогою методу Object.keys().
// Оголошена змінна values.
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153].
// Значення змінної values отримане за допомогою циклу for...of.

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// const values = [];
// // Change code below this line

// const keys = Object.keys(apartment);
// for (const key of keys) {
//     values.push(apartment[key]);
// };

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// У цьому коді ми спочатку отримуємо масив ключів власних властивостей об'єкта apartment за
// допомогою Object.keys.Потім ми створюємо пустий масив values і перебираємо отримані ключі в
// циклі for...of, додаючи значення відповідних властивостей до масиву values.

// #14

// Виконай рефакторинг функції countProps(object), використовуючи метод Object.keys() і, можливо, але
// не обов'язково, цикл for...of.

// Оголошена функція countProps(object)
// Виклик countProps({}) повертає 0
// Виклик countProps({ name: "Mango", age: 2 }) повертає 2
// Виклик countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }) повертає 3
// Функція підраховує тільки власні властивості об'єкта
// Функція використовує метод Object.keys() і, можливо, цикл for...of

// function countProps(object) {
//     // Change code below this line

//     const keys = Object.keys(object);
//     return keys.length;

//     // Change code above this line
// }

// console.log(countProps({})); // 0
// console.log(countProps({ name: "Mango", age: 2 })); // 2
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3

// У цій версії функції ми використовуємо Object.keys(object) для отримання масиву ключів
// властивостей об'єкта object, і потім повертаємо довжину цього масиву, яка відповідає
// кількості властивостей об'єкта.

// #15

// Запиши у змінну keys масив ключів власних властивостей об'єкта apartment, а у змінну values -
// масив всіх значень його властивостей.Використовуй методи Object.keys() і Object.values().

// Оголошена змінна apartment
// Значення змінної apartment - це об'єкт
// Оголошена змінна keys
// Значення змінної keys - це масив["descr", "rating", "price"]
// Оголошена змінна values
// Значення змінної values - це масив["Spacious apartment in the city center", 4, 2153]
// Для отримання масиву ключів об'єкта apartment використовується Object.keys()
// Для отримання масиву значень об'єкта apartment використовується Object.values()

// const apartment = {
//     descr: "Spacious apartment in the city center",
//     rating: 4,
//     price: 2153,
// };
// // Change code below this line

// const keys = Object.keys(apartment);
// const values = Object.values(apartment);

// console.log(keys); // ["descr", "rating", "price"]
// console.log(values); // ["Spacious apartment in the city center", 4, 2153]

// У цьому коді ми використовуємо метод Object.keys(apartment) для отримання масиву ключів властивостей
// об'єкта apartment, і метод Object.values(apartment) для отримання масиву значень властивостей.

// #16

// Напиши функцію countTotalSalary(salaries), яка приймає об'єкт зарплат, де ім'я властивості -
//     це ім'я співробітника, а значення властивості - це зарплата. Функція повинна розрахувати
//     загальну суму зарплат співробітників і повернути її.Використовуй змінну totalSalary для
//     зберігання загальної суми зарплати.

// Оголошена функція countTotalSalary(salaries)
// Виклик countTotalSalary({}) повертає 0
// Виклик countTotalSalary({ mango: 100, poly: 150, alfred: 80 }) повертає 330
// Виклик countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 }) повертає 400
// Функція враховує тільки власні властивості об'єкта

// function countTotalSalary(salaries) {
//     let totalSalary = 0;
//     // Change code below this line

//     for (const key in salaries) {
//         if (salaries.hasOwnProperty(key)) {
//             totalSalary += salaries[key];
//         }
//     }

//     // Change code above this line
//     return totalSalary;
// }

// console.log(countTotalSalary({})); // 0
// console.log(countTotalSalary({ mango: 100, poly: 150, alfred: 80 })); // 330
// console.log(countTotalSalary({ kiwi: 200, poly: 50, ajax: 150 })); // 400

// Ця функція перебирає властивості об'єкта salaries і додає їх значення до
// змінної totalSalary, щоб отримати загальну суму зарплати.

// #17

// Перебери масив об'єктів colors, використовуючи цикл for...of. Додай у масив hexColors значення
// властивостей hex, а в масив rgbColors - значення властивостей rgb з усіх об'єктів масиву colors.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const color of colors) {
//     hexColors.push(color.hex);
//     rgbColors.push(color.rgb);
// }

// console.log(hexColors); // ["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// console.log(rgbColors); // ["244,67,54", "33,150,243", "76,175,80", "255,235,59"]

// Цей код перебирає об'єкти у масиві colors за допомогою циклу for...of та додає значення
// властивостей hex і rgb в відповідні масиви hexColors і rgbColors.

// #18

// Напиши функцію getProductPrice(productName), яка приймає один параметр productName -
//     назва продукту.Функція шукає об'єкт продукту з таким ім'ям(властивість name) в
//     масиві products і повертає його ціну(властивість price).Якщо продукт з такою назвою не
// знайдений, функція повинна повертати null.

// Оголошена функція getProductPrice(productName).
// Виклик getProductPrice("Radar") повертає 1300.
// Виклик getProductPrice("Grip") повертає 1200.
// Виклик getProductPrice("Scanner") повертає 2700.
// Виклик getProductPrice("Droid") повертає 400.
// Виклик getProductPrice("Engine") повертає null.

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//     // Change code below this line

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price
//         }
//     }

//     return null;

//     // Change code above this line
// }

// // Приклад викликів функції
// console.log(getProductPrice("Radar")); // 1300
// console.log(getProductPrice("Grip")); // 1200
// console.log(getProductPrice("Scanner")); // 2700
// console.log(getProductPrice("Droid")); // 400
// console.log(getProductPrice("Engine")); // null

// Ця функція перебирає масив products і, якщо знаходить продукт з
// вказаною назвою, повертає його ціну.Якщо продукт не знайдений, повертається null.

// #19

// Напиши функцію getAllPropValues(propName), яка приймає один параметр propName - ім'я (ключ) властивості.
//  Функція повинна повернути масив всіх значень властивості з таким ім'ям з кожного об'єкта 
//  в масиві products.Якщо в об'єктах відсутні властивості з таким ім'ям, функція повинна повернути порожній масив.

// Оголошена функція getAllPropValues(propName)
// Виклик getAllPropValues("name") повертає["Radar", "Scanner", "Droid", "Grip"]
// Виклик getAllPropValues("quantity") повертає[4, 3, 7, 9]
// Виклик getAllPropValues("price") повертає[1300, 2700, 400, 1200]
// Виклик getAllPropValues("category") повертає[]

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line

//     const propValues = [];

//     for (const product of products) {
//         if (product[propName] !== undefined) {
//             propValues.push(product[propName]);
//         }
//     }

//     return propValues;

//     // Change code above this line
// }

// // Приклади викликів функції
// console.log(getAllPropValues("name")); // ["Radar", "Scanner", "Droid", "Grip"]
// console.log(getAllPropValues("quantity")); // [4, 3, 7, 9]
// console.log(getAllPropValues("price")); // [1300, 2700, 400, 1200]
// console.log(getAllPropValues("category")); // []

// Ця функція перебирає масив products і додає значення властивості з іменем propName до
// масиву propValues, якщо властивість існує в об'єкті. Якщо властивість відсутня в об'єкті,
//     її значення не додається до масиву.

// #20

// Напиши функцію calculateTotalPrice(productName), яка приймає один параметр productName -
//     назва товару.Функція повинна повернути загальну вартість(ціна * кількість) товару з
//     таким ім'ям з масиву products.

// Оголошена функція calculateTotalPrice(productName)
// Виклик calculateTotalPrice("Blaster") повертає 0
// Виклик calculateTotalPrice("Radar") повертає 5200
// Виклик calculateTotalPrice("Droid") повертає 2800
// Виклик calculateTotalPrice("Grip") повертає 10800
// Виклик calculateTotalPrice("Scanner") повертає 8100

// const products = [
//     { name: "Radar", price: 1300, quantity: 4 },
//     { name: "Scanner", price: 2700, quantity: 3 },
//     { name: "Droid", price: 400, quantity: 7 },
//     { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line

//     for (const product of products) {
//         if (product.name === productName) {
//             return product.price * product.quantity;
//         }
//     }
//     return 0; // Повертаємо 0, якщо товар не знайдено

//     // Change code above this line
// }

// // Приклади викликів функції
// console.log(calculateTotalPrice("Blaster")); // 0
// console.log(calculateTotalPrice("Radar")); // 5200
// console.log(calculateTotalPrice("Droid")); // 2800
// console.log(calculateTotalPrice("Grip")); // 10800
// console.log(calculateTotalPrice("Scanner")); // 8100

// Ця функція перебирає масив products, перевіряє, чи ім'я товару в об'єкті співпадає з productName, і
// якщо так, то обчислює загальну вартість(ціна * кількість).Якщо товар не знайдено, функція повертає 0.

// #21

// Надійшов триденний прогноз максимальних температур і ми рахуємо середню температуру
// за три дні(meanTemperature).Заміни оголошення змінних yesterday, today і tomorrow однією
// операцією деструктуризації властивостей об'єкта highTemperatures.

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна meanTemperature
// Значення змінної meanTemperature - це число 29
// Використовується синтаксис деструктуризації об'єкта highTemperatures

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const { yesterday, today, tomorrow } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday); // 28
// console.log(today); // 26
// console.log(tomorrow); // 33
// console.log(meanTemperature); // 29

// У цьому коді ми використовуємо деструктуризацію для отримання значень
// властивостей yesterday, today і tomorrow з об'єкта highTemperatures, і
// потім обчислюємо середню температуру meanTemperature.

// #22

// У прогнозі максимальних температур також може бути необов'язкова властивість icon - іконка погоди.
//  Заміни оголошення змінних yesterday, today, tomorrow і icon однією операцією деструктуризації
//  властивостей об'єкта highTemperatures.Задай значення за замовчуванням
//  для icon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна yesterday за допомогою деструктуризації
// Значення змінної yesterday - це число 28
// Оголошена змінна today за допомогою деструктуризації
// Значення змінної today - це число 26
// Оголошена змінна tomorrow за допомогою деструктуризації
// Значення змінної tomorrow - це число 33
// Оголошена змінна icon за допомогою деструктуризації
// Значення змінної icon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".
// Використовується деструктуризація об'єкта

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const {
//     yesterday,
//     today,
//     tomorrow,
//     icon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (yesterday + today + tomorrow) / 3;

// console.log(yesterday); // 28
// console.log(today); // 26
// console.log(tomorrow); // 33
// console.log(icon); // https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// У цьому коді ми використовуємо синтаксис деструктуризації об'єкта для одночасного оголошення
// змінних yesterday, today, tomorrow і icon, і задаємо значення за замовчуванням для icon, якщо
//  властивість відсутня в об'єкті highTemperatures.

// #23

// Заміни оголошення змінних highYesterday, highToday, highTomorrow і highIcon однією операцією
// деструктуризації властивостей об'єкта highTemperatures. Задай значення за замовчуванням для
// highIcon - рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна highTemperatures
// Значення змінної highTemperatures - це об'єкт
// Оголошена змінна highYesterday
// Значення змінної highYesterday - це число 28
// Оголошена змінна highToday
// Значення змінної highToday - це число 26
// Оголошена змінна highTomorrow
// Значення змінної highTomorrow - це число 33
// Оголошена змінна highIcon
// Значення змінної highIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується деструктуризація об'єкта

// const highTemperatures = {
//     yesterday: 28,
//     today: 26,
//     tomorrow: 33,
// };
// // Change code below this line

// const {
//     yesterday: highYesterday,
//     today: highToday,
//     tomorrow: highTomorrow,
//     icon: highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// // Change code above this line
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;

// console.log(highYesterday); // 28
// console.log(highToday); // 26
// console.log(highTomorrow); // 33
// console.log(highIcon); // https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg

// У цьому коді ми використовуємо деструктуризацію об'єкта для оголошення змінних highYesterday,
// highToday, highTomorrow і highIcon, і задаємо значення за замовчуванням для highIcon, якщо
// властивість відсутня в об'єкті highTemperatures.

// #24

// Виконай рефакторинг циклу for...of таким чином, щоб в ньому використовувалася деструктуризація об'єкта.

// Оголошена змінна colors
// Значення змінної colors - це масив
// Оголошена змінна hexColors
// Значення змінної hexColors - це масив["#f44336", "#2196f3", "#4caf50", "#ffeb3b"]
// Оголошена змінна rgbColors
// Значення змінної rgbColors - це масив["244,67,54", "33,150,243", "76,175,80", "255,235,59"]
// Для перебирання масиву використовується цикл for...of
// В циклі for...of використовується деструктуризація об'єкта

// const colors = [
//     { hex: "#f44336", rgb: "244,67,54" },
//     { hex: "#2196f3", rgb: "33,150,243" },
//     { hex: "#4caf50", rgb: "76,175,80" },
//     { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Change code below this line

// for (const { hex, rgb } of colors) {
//     hexColors.push(hex);
//     rgbColors.push(rgb);
// }

// У цьому коді ми використовуємо деструктуризацію об'єкта { hex, rgb }
// в циклі for...of для отримання значень hex і rgb з кожного об'єкта colors.

// #25

// Ми отримали прогноз погоди на два дні, з мінімальними і максимальними температурами, а
// також необов'язковими іконками. Заміни оголошення всіх змінних однією операцією деструктуризації
// властивостей об'єкта forecast.Задай значення за замовчуванням для іконок, змінних todayIcon і tomorrowIcon -
// рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg".

// Оголошена змінна forecast
// Значення змінної forecast - це об'єкт
// Оголошена змінна highToday за допомогою деструктуризації
// Значення змінної highToday - це число 32
// Оголошена змінна lowToday за допомогою деструктуризації
// Значення змінної lowToday - це число 28
// Оголошена змінна todayIcon за допомогою деструктуризації
// Значення змінної todayIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// Оголошена змінна highTomorrow за допомогою деструктуризації
// Значення змінної highTomorrow - це число 31
// Оголошена змінна lowTomorrow за допомогою деструктуризації
// Значення змінної lowTomorrow - це число 27
// Оголошена змінна tomorrowIcon за допомогою деструктуризації
// Значення змінної tomorrowIcon - це рядок "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"
// Використовується синта

// const forecast = {
//     today: {
//         low: 28,
//         high: 32,
//         icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//     },
//     tomorrow: {
//         low: 27,
//         high: 31,
//     },
// };
// // Change code below this line

// const {
//     today: {
//         high: highToday,
//         low: lowToday,
//         icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
//     tomorrow: {
//         high: highTomorrow,
//         low: lowTomorrow,
//         icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//     },
// } = forecast;

// console.log(highToday); // 32
// console.log(lowToday); // 28
// console.log(todayIcon); // "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg"
// console.log(highTomorrow); // 31
// console.log(lowTomorrow); // 27
// console.log(tomorrowIcon); // "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg"

// У цьому коді ми використовуємо деструктуризацію об'єкта forecast для отримання значень з
// властивостей highToday, lowToday, todayIcon, highTomorrow, lowTomorrow і tomorrowIcon.
// Значення за замовчуванням для todayIcon і tomorrowIcon встановлені за допомогою = при деструктуризації.

// #26

// Функція calculateMeanTemperature(forecast) приймає один параметр forecast - об'єкт температур
// на два дні наступного формату.

// {
//     today: { low: 10, high: 20 },
//     tomorrow: { low: 20, high: 30 }
// }
// Заміни оголошення змінних todayLow, todayHigh, tomorrowLow і tomorrowHigh однією операцією
// деструктуризації властивостей об'єкта forecast.

// Оголошена функція calculateMeanTemperature(forecast)
// В тілі функції використовується деструктуризація об'єкта
// В тілі функції оголошена змінна todayHigh за допомогою деструктуризації
// В тілі функції оголошена змінна todayLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowLow за допомогою деструктуризації
// В тілі функції оголошена змінна tomorrowHigh за допомогою деструктуризації
// Виклик calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } }) повертає 28.5
// Виклик calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } }) повертає 37

// Change code below this line
// function calculateMeanTemperature(forecast) {

//     const { today: { low: todayLow, high: todayHigh }, tomorrow: { low: tomorrowLow, high: tomorrowHigh } } = forecast;

//     // Change code above this line
//     return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(calculateMeanTemperature({ today: { low: 28, high: 32 }, tomorrow: { low: 25, high: 29 } })); // 28.5
// console.log(calculateMeanTemperature({ today: { low: 37, high: 40 }, tomorrow: { low: 33, high: 38 } })); // 37

// Ця функція використовує деструктуризацію об'єкта forecast, щоб отримати значення todayLow, todayHigh, tomorrowLow і tomorrowHigh.
// Потім обчислює середню температуру і повертає її значення.

// #27

// У змінній scores зберігається масив результатів тестування.Використовуючи розподіл і
// методи Math.max() і Math.min(), доповни код таким чином, щоб у змінній bestScore був найвищий бал, а
// у worstScore - найнижчий.

// Оголошена змінна scores
// Значення змінної scores - це масив[89, 64, 42, 17, 93, 51, 26]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 93
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 17
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві scores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві scores

// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Change code below this line

// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore); // 93
// console.log(worstScore); // 17

// У цьому коді ми використовуємо оператор розподілу ... для передачі елементів масиву scores як
// аргументів до методів Math.max() і Math.min(), щоб отримати найвищий і найнижчий бали відповідно.

// #28

// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих
// груп.Використовуючи розподіл, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.
// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив[64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив[89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив[29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив[64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores

// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Change code below this line
// const allScores = [...firstGroupScores, ...secondGroupScores, ...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores); // [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// console.log(bestScore); // 97
// console.log(worstScore); // 14

// У цьому коді ми об'єднали всі результати в один масив allScores, використовуючи оператор
// розподілу ... для кожної групи балів.Потім ми знаходимо найвищий і найнижчий бали в цьому
// масиві за допомогою методів Math.max() і Math.min().

// #29

// В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які
// зберігаються у змінній defaultSettings.Під час створення тесту, усі або частину налаштувань
// можна перевизначити, вони зберігаються у змінній overrideSettings.

// Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за
// замовчуванням і поверх них застосувати перевизначені налаштування.Доповни код таким чином, щоб
// у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

// Оголошена змінна defaultSettings
// Значення змінної defaultSettings - це об'єкт
// Оголошена змінна overrideSettings
// Значення змінної overrideSettings - це об'єкт
// Оголошена змінна finalSettings
// Значення змінної finalSettings - це об'єкт
// Значення властивості finalSettings.theme дорівнює "light"
// Значення властивості finalSettings.public дорівнює "false"
// Значення властивості finalSettings.withPassword дорівнює "true"
// Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
// Значення властивості finalSettings.timePerQuestion дорівнює 30
// Для присвоєння значення змінній finalSettings використовується синтаксис ...

// const defaultSettings = {
//     theme: "light",
//     public: true,
//     withPassword: false,
//     minNumberOfQuestions: 10,
//     timePerQuestion: 60,
// };
// const overrideSettings = {
//     public: false,
//     withPassword: true,
//     timePerQuestion: 30,
// };
// // Change code below this line

// const finalSettings = {
//     ...defaultSettings, // Використовуємо налаштування за замовчуванням
//     ...overrideSettings, // Перевизначаємо налаштування
// };

// console.log(finalSettings);

// В результаті коду finalSettings буде містити фінальні налаштування, де
// налаштування з overrideSettings перевизначають налаштування з defaultSettings.

// #30

// Напиши функцію makeTask(data) яка приймає один параметр data - об'єкт з наступними властивостями.

// text - текст завдання.
//     category - категорія завдання.
//         priority - пріоритет завдання.
// Функція повинна створити і повернути новий об'єкт завдання, не змінюючи напряму параметр data.
// У новому об'єкті повинна бути властивість completed, значення якої зберігається в однойменній локальній змінній.

// В параметрі data гарантовано буде тільки властивість text, а інші дві, category і priority, можуть
// бути відсутніми.Тоді, в новому об'єкті завдання, у властивостях category і priority повинні бути значення за
// замовчуванням, що зберігаються в однойменних локальних змінних.

// Оголошена функція makeTask(data)
// Виклик makeTask({}) повертає { category: "General", priority: "Normal", completed: false }
// Виклик makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" }) повертає { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// Виклик makeTask({ category: "Finance", text: "Take interest" }) повертає { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// Виклик makeTask({ priority: "Low", text: "Choose shampoo" }) повертає { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// Виклик makeTask({ text: "Buy bread" }) повертає { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// function makeTask(data) {
//     const completed = false;
//     const category = "General";
//     const priority = "Normal";
//     // Change code below this line

//     return { ...{ category, priority, completed }, ...data };

//     // Change code above this line
// }

// // Приклади викликів
// console.log(makeTask({})); // { category: "General", priority: "Normal", completed: false }
// console.log(makeTask({ category: "Homemade", priority: "Low", text: "Take out the trash" })); // { category: "Homemade", priority: "Low", text: "Take out the trash", completed: false }
// console.log(makeTask({ category: "Finance", text: "Take interest" })); // { category: "Finance", priority: "Normal", text: "Take interest", completed: false }
// console.log(makeTask({ priority: "Low", text: "Choose shampoo" })); // { category: "General", priority: "Low", text: "Choose shampoo", completed: false }
// console.log(makeTask({ text: "Buy bread" })); // { category: "General", priority: "Normal", text: "Buy bread", completed: false }

// #31

// Використовуючи операцію rest, доповни код функції add() таким чином, щоб вона приймала будь - яку
// кількість аргументів, рахувала і повертала їх суму.

// Оголошена функція add
// Функція add використовує параметр args
// Для збирання аргументів у змінну args, у підписі функції використовується синтаксис ... (оператор rest)
// Виклик add(15, 27) повертає 42
// Виклик add(12, 4, 11, 48) повертає 75
// Виклик add(32, 6, 13, 19, 8) повертає 78
// Виклик add(74, 11, 62, 46, 12, 36) повертає 241

// // Change code below this line

// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }

//     return total;

//     // Change code above this line
// }

// // Приклади викликів
// console.log(add(15, 27)); // 42
// console.log(add(12, 4, 11, 48)); // 75
// console.log(add(32, 6, 13, 19, 8)); // 78
// console.log(add(74, 11, 62, 46, 12, 36)); // 241

// #32

// Функція addOverNum() рахує суму всіх аргументів.Зміни параметри і тіло функції addOverNum() таким
// чином, щоб вона рахувала суму тільки тих аргументів, які більші за задане число.Це число повинно бути
// першим параметром функції.

// Оголошена функція addOverNum()
// Виклик addOverNum(50, 15, 27) повертає 0
// Виклик addOverNum(10, 12, 4, 11, 48, 10, 8) повертає 71
// Виклик addOverNum(15, 32, 6, 13, 19, 8) повертає 51
// Виклик addOverNum(20, 74, 11, 62, 46, 12, 36) повертає 218

// Change code below this line

// function addOverNum(...args) {
//     let total = 0;
//     const addNum = args[0];
//     for (let i = 0; i < args.length; i += 1) {
//         if (args[i] > addNum)
//             total += args[i];
//     }

//     return total;

//     // Change code above this line
// }

// // Приклади викликів
// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218

// function addOverNum(num, ...args) {
//     return args.reduce((total, current) => (current > num ? total + current : total), 0);
// }

// // Приклади викликів
// console.log(addOverNum(50, 15, 27)); // 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8)); // 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8)); // 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36)); // 218

// Ця функція приймає перший аргумент num, як число, з яким порівнюються інші аргументи.
// Використовуючи операцію rest(...args), вона обробляє всі інші аргументи та знаходить
// їхню суму, враховуючи умову, що аргументи повинні бути більші за num.

// #33

// Функція findMatches() приймає довільну кількість аргументів.Першим аргументом завжди буде
// масив чисел, а решта аргументів будуть просто числами.

// Доповни код функції таким чином, щоб вона повертала новий масив matches, в якому будуть
//  тільки ті аргументи, починаючи з другого, які є в масиві першого аргументу.

//     Наприклад, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повинна повернути масив[1, 2], тому
//      що тільки вони є в масиві першого аргументу.

// Оголошена функція findMatches()
// Виклик findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) повертає[1, 2]
// Виклик findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2) повертає[17, 89, 2]
// Виклик findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41) повертає[24, 9, 41]
// Виклик findMatches([63, 11, 8, 29], 4, 7, 16) повертає[]

// // Change code below this line
// function findMatches(array, ...args) {
//     const matches = []; // Don't change this line

//     for (const number of array) {
//         if (args.includes(number)) {
//             matches.push(number);
//         }
//     }

//     // Change code above this line
//     return matches;
// }

// // Приклади викликів
// console.log(findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7)); // [1, 2]
// console.log(findMatches([4, 89, 17, 36, 2], 8, 17, 89, 27, 2)); // [17, 89, 2]
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41)); // [24, 9, 41]
// console.log(findMatches([63, 11, 8, 29], 4, 7, 16)); // []

// #34

// Додай об'єкту bookShelf ще два методи, які поки що будуть повертати просто рядки за
// аналогією з getBooks() і addBook(bookName).

// Метод removeBook(bookName) буде видаляти книгу за назвою.Повертає рядок "Deleting book <назва книги>", де
//     < назва книги > - це значення параметра bookName.

// Метод updateBook(oldName, newName) буде оновлювати назву книги на нову.Повертає
// рядок "Updating book <стара назва> to <нова назва>", де < стара назва > і < нова назва > - це
// значення параметрів oldName і newName відповідно.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.getBooks - це метод об'єкта

// Виклик методу bookShelf.getBooks() повертає рядок "Returning all books"

// Значення властивості bookShelf.addBook - це метод об'єкта

// Виклик методу bookShelf.addBook("Haze") повертає рядок "Adding book Haze"

// Значення властивості bookShelf.removeBook - це метод об'єкта

// Виклик методу bookShelf.removeBook("Red sunset") повертає рядок "Deleting book Red sunset"

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Виклик методу bookShelf.updateBook("Sands of dune", "Dune") повертає рядок "Updating book Sands of dune to Dune"

// const bookShelf = {
//     // Change code below this line

//     books: ["The last kingdom", "The guardian of dreams"],
//     getBooks() {
//         return "Returning all books";
//     },
//     addBook(bookName) {
//         return `Adding book ${bookName}`;
//     },
//     removeBook(bookName) {
//         return `Deleting book ${bookName}`
//     },
//     updateBook(oldName, newName) {
//         return `Updating book ${oldName} to ${newName}`
//     },

//     // Change code above this line
// };

// // Приклади викликів методів
// console.log(bookShelf.getBooks()); // "Returning all books"
// console.log(bookShelf.addBook("Haze")); // "Adding book Haze"
// console.log(bookShelf.removeBook("Red sunset")); // "Deleting book Red sunset"
// console.log(bookShelf.updateBook("Sands of dune", "Dune")); // "Updating book Sands of dune to Dune"

// #35

// Доповни метод updateBook(oldName, newName) таким чином, щоб він змінював назву книги з oldName на
// newName у властивості books.Використовуй indexOf() для того, щоб знайти потрібний елемент
// масиву, і splice() для того, щоб замінити цей елемент.

// Оголошена змінна bookShelf

// Значення змінної bookShelf - це об'єкт

// Значення властивості bookShelf.updateBook - це метод об'єкта

// Після виклику методу bookShelf.updateBook("Haze", "Dungeon chronicles"), значення
// властивості books - це масив["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]

// Після виклику методу bookShelf.updateBook("The last kingdom", "Dune"), значення
// властивості books - це масив["Dune", "Haze", "The guardian of dreams"]

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],
//     updateBook(oldName, newName) {
//         // Change code below this line

//         const bookNumber = this.books.indexOf(oldName);
//         this.books.splice(bookNumber, 1, newName);

//         // Change code above this line
//     },
// };

// const bookShelf = {
//     books: ["The last kingdom", "Haze", "The guardian of dreams"],

//     updateBook(oldName, newName) {
//         const index = this.books.indexOf(oldName);
//         if (index !== -1) {
//             this.books[index] = newName;
//             return `Updating book ${oldName} to ${newName}`;
//         } else {
//             return `Book ${oldName} not found`;
//         }
//     },
// };

// console.log(bookShelf.books); // ["The last kingdom", "Haze", "The guardian of dreams"]
// console.log(bookShelf.updateBook("Haze", "Dungeon chronicles")); // "Updating book Haze to Dungeon chronicles"
// console.log(bookShelf.books); // ["The last kingdom", "Dungeon chronicles", "The guardian of dreams"]
// console.log(bookShelf.updateBook("The last kingdom", "Dune")); // "Updating book The last kingdom to Dune"
// console.log(bookShelf.books); // ["Dune", "Dungeon chronicles", "The guardian of dreams"]

// Тепер метод updateBook оновлює назву книги з oldName на newName у властивості books, використовуючи indexOf для
// пошуку елемента масиву та splice для заміни цього елемента.

// #37

// Додай об'єкту atTheOldToad метод getPotions(), який просто повертає значення властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає["Speed potion", "Dragon breath", "Stone skin"]

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     // Change code below this line

//     getPotions() {
//         return atTheOldToad.potions
//     },

//     // Change code above this line
// };

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],

//     getPotions() {
//         return this.potions;
//     },
// };

// console.log(atTheOldToad.getPotions()); // ["Speed potion", "Dragon breath", "Stone skin"]

// Тепер метод getPotions повертає масив зі злитками, як очікується.

// #38

// Доповни метод addPotion(potionName) таким чином, щоб він додавав зілля potionName в
// кінець масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions
// буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility"]
// Після другого виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions
// буде масив["Speed potion", "Dragon breath", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     addPotion(potionName) {
//         // Change code below this line

//         this.potions.push(potionName);

//         // Change code above this line
//     },
// };

// #39

// Доповни метод removePotion(potionName) таким чином, щоб він видаляв зілля potionName з
// масиву зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Після першого виклику методу atTheOldToad.removePotion("Dragon breath"), у властивості potions буде
// масив["Speed potion", Stone skin"]
// Після другого виклику методу atTheOldToad.removePotion("Speed potion"), у властивості potions буде
// масив["Stone skin"]

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     removePotion(potionName) {
//         // Change code below this line

//         const potionNumber = this.potions.indexOf(potionName);
//         this.potions.splice(potionNumber, 1);

//         // Change code above this line
//     },
// };

// #40

// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву
// зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив["Speed potion", "Dragon breath", "Stone skin"]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у
// властивості potions буде масив["Speed potion", "Polymorth", "Stone skin"]
// Після другого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у
// властивості potions буде масив["Speed potion", "Polymorth", "Invisibility"]

// const atTheOldToad = {
//     potions: ["Speed potion", "Dragon breath", "Stone skin"],
//     updatePotionName(oldName, newName) {
//         // Change code below this line

//         const potionNumber = this.potions.indexOf(oldName);
//         this.potions.splice(potionNumber, 1, newName);

//         // Change code above this line
//     },
// };

// console.log(atTheOldToad.potions); // ["Speed potion", "Stone skin"]

// Цей код додасть можливість видаляти зілля potionName з масиву potions.

// #41

// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною, а в майбутньому,
// можливо, й іншими характеристиками.Тому зараз у властивості potions буде зберігатися масив об'єктів з
// наступними властивостями.

// {
//     name: "Dragon breath",
//         price: 700
// }
// Виконай рефакторинг методів об'єкта atTheOldToad таким чином, щоб вони працювали не з масивом рядків,
// а з масивом об'єктів.

//     getPotions() - метод для отримання всього зілля.Повертає значення властивості potions.
//     addPotion(newPotion) - додає зілля newPotion(вже об'єкт) в масив у властивості potions,
//         але тільки, якщо такого зілля ще немає в інвентарі.В іншому випадку повертається рядок.
// removePotion(potionName) - видаляє об'єкт зілля з ім'ям potionName з масиву у властивості potions.
//         updatePotionName(oldName, newName) - оновлює властивість name об'єкта-зілля з
//             назвою oldName на newName в масиві potions.
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() для вихідного об'єкта
// повертає[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в
// масиві potions останнім елементом буде цей об'єкт
// Для вихідного об'єкта після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в
// масиві potions останнім елементом буде цей об'єкт
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion повертає рядок з текстом з вихідного коду
// Якщо зілля, що додається, вже є в масиві potions, метод addPotion не додає в нього переданий об'єкт
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), масив
// potions не змінюється
// Для вихідного об'єкта після виклику atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), массив
// potions не змінюється
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }), повертає
// рядок "Error! Potion Dragon breath is already in your inventory!"
// Для вихідного об'єкта виклик atTheOldToad.addPotion({ name: "Stone skin", price: 240 }), повертає
// рядок "Error! Potion Stone skin is already in your inventory!"
// Значення властивості atTheOldToad.removePotion - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Dragon breath"), у
// властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Stone skin", price: 520 }]
// Для вихідного об'єкта після виклику методу atTheOldToad.removePotion("Speed potion"), у
// властивості potions буде масив[{ name: "Dragon breath", price: 780 }, { name: "Stone skin", price: 520 }]
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Dragon breath", "Polymorth"), у
// властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Polymorth", price: 780 },
//     { name: "Stone skin", price: 520 }]
// Для вихідного об'єкта після виклику методу atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"), у
//  властивості potions буде масив[{ name: "Speed potion", price: 460 }, { name: "Dragon breath", price: 780 },
//     { name: "Invulnerability potion", price: 520 }]

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
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
//         }
//         this.potions.push(newPotion);

//     },
//     removePotion(potionName) {
//         for (let i = 0; i < this.potions.length; i += 1) {
//             if (this.potions[i].name === potionName) {
//                 this.potions.splice(i, 1);
//                 return;
//             }
//         }
//         return `Potion ${potionName} is not in inventory!`;

//     },
//     updatePotionName(oldName, newName) {
//         for (const el of this.potions) {
//             if (el.name === oldName) {
//                 el.name = newName
//                 return;
//             }
//         }

//     },
//     // Change code above this line
// };

// варіант 2

// const atTheOldToad = {
//     potions: [
//         { name: "Speed potion", price: 460 },
//         { name: "Dragon breath", price: 780 },
//         { name: "Stone skin", price: 520 },
//     ],

//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         const potionNames = this.potions.map(potion => potion.name);
//         if (!potionNames.includes(newPotion.name)) {
//             this.potions.push(newPotion);
//         } else {
//             return `Error! Potion ${newPotion.name} is already in your inventory!`;
//         }
//     },

//     removePotion(potionName) {
//         const index = this.potions.findIndex(potion => potion.name === potionName);
//         if (index !== -1) {
//             this.potions.splice(index, 1);
//         }
//     },

//     updatePotionName(oldName, newName) {
//         const potionToUpdate = this.potions.find(potion => potion.name === oldName);
//         if (potionToUpdate) {
//             potionToUpdate.name = newName;
//         }
//     },
// };

// // Перевірка методів
// console.log(atTheOldToad.getPotions());

// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 }));
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.addPotion({ name: "Dragon breath", price: 700 }));
// console.log(atTheOldToad.addPotion({ name: "Stone skin", price: 240 }));

// console.log(atTheOldToad.removePotion("Dragon breath"));
// console.log(atTheOldToad.removePotion("Speed potion"));

// console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"));
// console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"));

// console.log(atTheOldToad.getPotions());

// Цей код оновлює методи так, щоб вони працювали з масивом об'єктів, а не з масивом рядків, 
// і враховували ім'я та ціну зілля.
