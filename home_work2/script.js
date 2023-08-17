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

// Ця функція перевіряє вік, переданий в параметрі age, і застосовує умову, де вік 18 і більше вважається дорослим,
// а менше - неповнолітнім.Так як в тілі функції є лише одна умовна інструкція,
// не виникає необхідності використовувати else або else if.

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

// Ця функція порівнює пароль, переданий в параметрі password, зі змінною ADMIN_PASSWORD,
// яка містить правильний пароль.Вона використовує патерн "раннього повернення" для відразу повернення результату
// при збігу паролей, інакше повертає повідомлення про невірний пароль.

// #3

// Функція checkStorage перевіряє можливість оформлення замовлення і повертає повідомлення про результат.
// Вона приймає два параметри, значення яких будуть задаватися під час її виклику.

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

// Ця функція перевіряє різні умови для параметрів available(доступна кількість товарів на складі) і
// ordered(кількість товару в замовленні), і повертає відповідне повідомлення в залежності від умов.
// Використано патерн «раннє повернення», що дозволяє відразу повернути результат при виконанні однієї з умов.

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

// В цьому коді ми оголошуємо три змінні(firstElement, secondElement, lastElement) і 
// присвоюємо їм значення, використовуючи нотацію квадратних дужок для доступу до 
// елементів масиву fruits.firstElement отримає значення першого елемента масиву("apple"),
// secondElement отримає значення другого елемента масиву("peach"),
// а lastElement отримає значення останнього елемента масиву("banana").

// #6

// Виконай перевизначення значення елементів з індексами 1 і 3. Заміни "plum" на "peach", а "orange" на "banana".

// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "peach", "pear", "banana"]

// const fruits = ["apple", "plum", "pear", "orange"];

// fruits[1] = "peach";
// fruits[3] = "banana";

// console.log(fruits);

// В цьому коді ми використовуємо індексацію масиву для перевизначення значень елементів з 
// індексами 1 і 3 на "peach" і "banana" відповідно.

// #7

// Оголоси змінну fruitsArrayLength і присвой їй довжину масиву fruits, використовуючи властивість length.

// Оголошена змінна fruitsArrayLength
// Значення змінної fruitsArrayLength - це число 4

// const fruits = ["apple", "peach", "pear", "banana"];

// const fruitsArrayLength = fruits.length;

// console.log(fruitsArrayLength); // Виводить 4

// У цьому коді ми використовуємо властивість length масиву fruits,
// щоб отримати довжину масиву і присвоїти це значення змінній fruitsArrayLength.

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

// console.log(lastElementIndex); // Виводить 3
// console.log(lastElement); // Виводить "banana"

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[lastElementIndex];

// У цьому коді ми використовуємо властивість length масиву fruits для отримання довжини масиву.
// Так як індекси масиву починаються з 0, останній елемент масиву можна отримати за допомогою індексу length - 1.

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


// У цій функції ми створюємо новий масив, що складається з першого елемента array(з індексом 0) і 
// останнього елемента array(з індексом array.length - 1).

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

// console.log(splitMessage("Mango hurries to the train", " ")); // Виводить ["Mango", "hurries", "to", "the", "train"]
// console.log(splitMessage("Mango", "")); // Виводить ["M", "a", "n", "g", "o"]
// console.log(splitMessage("best_for_week", "_")); // Виводить ["best", "for", "week"]

// function splitMessage(message, delimiter) {
//     return message.split(delimiter);
// }

// У цій функції ми використовуємо метод split(delimiter), який розбиває рядок message на масив рядків,
// використовуючи delimiter як роздільник.

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

// У цій функції ми використовуємо метод join(delimiter),
// який з'єднує всі елементи масиву array роздільником delimiter, утворюючи таким чином рядок.

// #13

// Напиши функцію slugify(title), яка приймає заголовок статті, параметр title, і повертає slug, створений з цього рядка.

// Значенням параметра title будуть рядки, слова яких розділені лише пробілами
// Усі символи slug повинні бути у нижньому регістрі
// Всі слова slug повинні бути розділені тире (Slug - це завжди рядок у нижньому регістрі, слова якого розділені тире.)
// Оголошена функція slugify(title)
// Виклик slugify("Arrays for begginers") повертає "arrays-for-begginers"
// Виклик slugify("English for developer") повертає "english-for-developer"
// Виклик slugify("Ten secrets of JavaScript") повертає "ten-secrets-of-javascript"
// Виклик slugify("How to become a JUNIOR developer in TWO WEEKS") повертає "how-to-become-a-junior-developer-in-two-weeks"

// function slugify(title) {
//     const words = title.toLowerCase().split(' ');
//     const slug = words.join('-');
//     return slug;
// }

// console.log(slugify("Arrays for begginers")); // "arrays-for-begginers"
// console.log(slugify("English for developer")); // "english-for-developer"
// console.log(slugify("Ten secrets of JavaScript")); // "ten-secrets-of-javascript"
// console.log(slugify("How to become a JUNIOR developer in TWO WEEKS")); // "how-to-become-a-junior-developer-in-two-weeks"

// У цій функції ми спершу перетворюємо всі символи заголовку на нижній регістр за допомогою методу toLowerCase().
// Потім розділяємо рядок на слова за допомогою методу split(' '),
//     де ' ' вказує на розділювач пробіл.Після чого об'єднуємо ці слова за допомогою методу join(' - '),
// де ' - ' - це розділювач між словами у створеному slug.

// #14

// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

//     firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив["pear", "orange", "banana"]
// Змінній lastThreeEls присвоєна копія частини масиву fruits після застосування методу slice з правильними аргументами

// const fruits = ["apple", "plum", "pear", "orange", "banana"];

// const firstTwoEls = fruits.slice(0, 2);
// const nonExtremeEls = fruits.slice(1, -1);
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls); // ["apple", "plum"]
// console.log(nonExtremeEls); // ["plum", "pear", "orange"]
// console.log(lastThreeEls); // ["pear", "orange", "banana"]

// У цьому коді використовується метод slice для створення часткових копій масиву fruits.
// Змінна firstTwoEls отримує перші два елементи масиву, nonExtremeEls отримує всі елементи,
// крім першого та останнього, а lastThreeEls отримує останні три елементи масиву.

// #15

// Доповни код таким чином, щоб у змінній allClients утворився масив усіх елементів масивів oldClients і newClients.

// Оголошена змінна oldClients
// Значення змінної oldClients - це масив["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументами

// const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients);

// console.log(allClients); // ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]

// Метод concat використовується для об'єднання двох або більше масивів в один.
// У вашому коді ми використовуємо метод concat для об'єднання масивів oldClients і
// newClients і отримання масиву allClients, який містить всі елементи з обох початкових масивів.

// #16

// Напиши функцію makeArray(firstArray, secondArray, maxLength) для створення нового масиву з
//  усіма елементами двох вихідних firstArray і secondArray.
//  Параметр maxLength містить максимально допустиму довжину нового масиву.

// Якщо кількість елементів нового масиву більша за maxLength,
// функція повинна повернути копію масиву довжиною maxLength елементів.
// В іншому випадку функція повинна повернути новий масив повністю.

// Оголошена функція makeArray(firstArray, secondArray, maxLength)
// Виклик makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) повертає["Mango", "Poly", "Ajax"]
// Виклик makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) повертає["Mango", "Poly", "Houston", "Ajax"]
// Виклик makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) повертає["Mango", "Ajax", "Chelsea"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) повертає["Earth", "Jupiter"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) повертає["Earth", "Jupiter", "Neptune", "Uranus"]
// Виклик makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0) повертає[]
// Виклик функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

// function makeArray(firstArray, secondArray, maxLength) {

//     const combinedArray = firstArray.concat(secondArray);

//     if (combinedArray.length > maxLength) {
//         return combinedArray.slice(0, maxLength);
//     } else {
//         return combinedArray;
//     }

// }

// console.log(makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3)); // ["Mango", "Poly", "Ajax"]
// console.log(makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4)); // ["Mango", "Poly", "Houston", "Ajax"]
// console.log(makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3)); // ["Mango", "Ajax", "Chelsea"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2)); // ["Earth", "Jupiter"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4)); // ["Earth", "Jupiter", "Neptune", "Uranus"]
// console.log(makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0)); // []

// У цій функції ми об'єднуємо два вихідних масиви за допомогою методу concat в новий масив combinedArray.
// Потім ми перевіряємо довжину combinedArray порівняно з maxLength.Якщо combinedArray має більше елементів,
// ніж maxLength, то ми використовуємо метод slice для отримання підрядка масиву довжиною maxLength.В іншому випадку,
// повертаємо повний combinedArray.

// #17

// Доповни цикл for таким чином, щоб він логував всі цілі числа в діапазоні від start до end включно.

// Оголошена змінна start
// Значення змінної start - це число 3
// Оголошена змінна end
// Значення змінної end - це число 7
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 3
// Умова циклу приводиться до true доти, доки i менше або дорівнює 7
// На кожній ітерації значення змінної i збільшується на одиницю
// Виведення у консоль змінної i покаже числа 3, 4, 5, 6, 7

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i++) {
//     console.log(i);
// }

// У цьому коді ми використовуємо цикл for, який починається зі значення start,
// продовжується поки i менше або дорівнює end, і на кожній ітерації збільшує значення i на одиницю.
// У тілі циклу ми використовуємо console.log(i) для виведення поточного значення i у консоль.
// Це виведе числа від 3 до 7 включно.

// #18

// Напиши функцію calculateTotal(number), яка приймає ціле число(параметр number) і 
// повертає суму всіх цілих чисел від одиниці і до цього числа. Наприклад, 
// якщо number дорівнює 3, то сума - це 1 + 2 + 3, тобто 6.

// Оголошена функція calculateTotal(number)
// Виклик функції calculateTotal(1) повертає 1
// Виклик функції calculateTotal(3) повертає 6
// Виклик функції calculateTotal(7) повертає 28
// Виклик функції calculateTotal(18) повертає 171
// Виклик функції calculateTotal(24) повертає 300
// Виклик функції calculateTotal() з випадковим числом повертає правильне значення

// function calculateTotal(number) {
//     let total = 0;

//     for (let i = 1; i <= number; i++) {
//         total += i;
//     }

//     return total;
// }

// console.log(calculateTotal(1)); // 1
// console.log(calculateTotal(3)); // 6
// console.log(calculateTotal(7)); // 28
// console.log(calculateTotal(18)); // 171
// console.log(calculateTotal(24)); // 300

// У цій функції ми використовуємо цикл for, який обчислює суму всіх цілих чисел від 1 до заданого числа number.
// Змінна total починається зі значення 0 і на кожній ітерації додається значення i.Після завершення циклу,
// значення total містить суму всіх цілих чисел від 1 до number, і воно повертається як результат функції.

// #19

// Доповни код циклу for таким чином, щоб він послідовно логував усі елементи масиву fruits.

// Оголошена змінна fruits
// Значення змінної fruits - це масив["apple", "plum", "pear", "orange"]
// Оголошена змінна i - лічильник циклу
// Початкове значення змінної i дорівнює 0
// Умова циклу приводиться до true доти, доки i менше за 4
// На кожній ітерації значення змінної i збільшується на одиницю
// В тілі циклу for оголошується змінна const fruit і цій змінній присвоюється значення - елемент масиву
// В тілі циклу for використовується виведення у консоль змінної fruit

// const fruits = ["apple", "plum", "pear", "orange"];

// for (let i = 0; i < fruits.length; i+=1) {
//     const fruit = fruits[i];
//     console.log(fruit);
// }

// У цьому коді ми використовуємо цикл for, який проходить по всім елементам масиву fruits.
// Змінна i слугує лічильником ітерацій циклу.Умова i < fruits.length перевіряє, чи i менше довжини масиву,
//     і на кожній ітерації значення i збільшується на одиницю.

// У тілі циклу ми оголошуємо змінну fruit, яка отримує значення поточного елемента масиву за допомогою індексу i.
// Після цього ми використовуємо console.log(fruit) для виведення поточного значення fruit у консоль.
// Це виведе всі елементи масиву fruits по черзі.

// #20

// // Напиши функцію calculateTotalPrice(order), яка приймає один параметр order - масив чисел,
//  і обчислює загальну суму його елементів.Загальна сума елементів повинна зберігатися у змінній total,
//     яка повертається як результат роботи функції.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice() з випадковим масивом повертає правильне значення

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (let i = 0; i < order.length; i++) {
//         total += order[i];
//     }

//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116

// У цій функції ми використовуємо цикл for, який проходить по всім елементам масиву order.
// Змінна i слугує лічильником ітерацій циклу.Умова i < order.length перевіряє, чи i менше довжини масиву order,
// і на кожній ітерації значення i збільшується на одиницю.

// У тілі циклу ми додаємо значення поточного елемента масиву order до змінної total,
// яка тримає загальну суму елементів.Після завершення циклу, значення total містить суму всіх елементів масиву order,
// і воно повертається як результат функції.

// #21

// Напиши функцію findLongestWord(string), яка приймає довільний рядок, що складається тільки зі слів,
//  розділених пробілом(параметр string), і повертає найдовше слово в цьому рядку.

// Оголошена функція findLongestWord(string)
// Виклик функції findLongestWord("The quick brown fox jumped over the lazy dog") повертає jumped
// Виклик функції findLongestWord("Google do a roll") повертає Google
// Виклик функції findLongestWord("May the force be with you") повертає force
// Виклик функції findLongestWord() з випадковим рядком повертає правильне значення

// function findLongestWord(string) {
//     const words = string.split(" ");
//     let longestWord = "";

//     for (const word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }

//     return longestWord;
// }

// console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // "jumped"
// console.log(findLongestWord("Google do a roll")); // "Google"
// console.log(findLongestWord("May the force be with you")); // "force"

// У цій функції ми спершу розбиваємо рядок на окремі слова за допомогою методу split(" "),
// що створює масив words.Потім ми проходимо через всі слова в масиві words за допомогою циклу for...of.

// У тілі циклу ми порівнюємо довжину поточного слова з довжиною найдовшого слова(longestWord).
// Якщо довжина поточного слова більша за довжину найдовшого слова, 
// ми оновлюємо значення longestWord на поточне слово.

// Після завершення циклу, змінна longestWord міститиме найдовше слово з рядка, 
// і воно повертається як результат функції.

// #22

// Доповни код функції createArrayOfNumbers(min, max) таким чином,
//  щоб вона повертала масив усіх цілих чисел від значення min до max.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає[1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає[14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає[29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push

// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//     for (let i = min; i <= max; i++) {
//         numbers.push(i);
//     }

//     return numbers;
// }

// console.log(createArrayOfNumbers(1, 3)); // [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17)); // [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); // [29, 30, 31, 32, 33, 34]

// У цій функції ми використовуємо цикл for, який проходить від числа min до числа max включно.
// На кожній ітерації ми використовуємо метод push для додавання поточного числа i до масиву numbers.

// Після завершення циклу, масив numbers міститиме усі цілі числа від min до max, 
// і він повертається як результат функції.

// #23

// Напиши функцію filterArray(numbers, value), яка приймає масив чисел(параметр numbers) і повертає новий масив,
//  в якому будуть тільки ті елементи масиву numbers, які більші за значення параметра value(число).

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає[4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає[5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає[]
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає[41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає[24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// В циклі for використовувався метод push

// function filterArray(numbers, value) {
//     const filteredArray = [];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > value) {
//             filteredArray.push(numbers[i]);
//         }
//     }

//     return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// У цій функції ми перебираємо кожен елемент масиву numbers за допомогою циклу for.
// Якщо поточний елемент більший за значення параметра value, то ми додаємо його до масиву filteredArray за
// допомогою методу push.По завершенні циклу, масив filteredArray міститиме всі елементи, які задовольняють умову,
// і він повертається як результат функції.

// #24

// Функція checkFruit(fruit) приймає рядок з назвою фрукта(параметр fruit), і перевіряє,
//  чи присутній такий фрукт в масиві fruits.

// Доповни код функції таким чином, що якщо:

// фрукт присутній в масиві, то функція повертає true;
// фрукт відсутній в масиві, то функція повертає false.
// Оголошена функція checkFruit(fruit)
// Виклик checkFruit("plum") повертає true
// Виклик checkFruit("mandarin") повертає false
// Виклик checkFruit("pear") повертає true
// Виклик checkFruit("Pear") повертає false
// Виклик checkFruit("apple") повертає true
// Виклик функції checkFruit() з випадковим словом повертає правильне значення boolean
// У функції використовувався метод includes

// function checkFruit(fruit) {
//     const fruits = ["apple", "plum", "pear", "orange"];

//     return fruits.includes(fruit);
// }

// console.log(checkFruit("plum")); // true
// console.log(checkFruit("mandarin")); // false
// console.log(checkFruit("pear")); // true
// console.log(checkFruit("Pear")); // false
// console.log(checkFruit("apple")); // true

// У цій функції ми маємо масив fruits, в якому зберігаються доступні фрукти.
// Метод includes перевіряє, чи містить масив fruits заданий фрукт.
// Якщо фрукт присутній у масиві, то функція повертає true, інакше - false.


// #25

// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//     Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5, 
// оскільки вони присутні в обох вихідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.

// Напиши функцію getCommonElements(array1, array2), яка отримує два масиви довільної довжини в
//  параметри array1 і array2, і повертає новий масив, що складається з тих елементів,
    // які присутні в обох вихідних масивах.

// Оголошена функція getCommonElements(array1, array2)
// Виклик getCommonElements([1, 2, 3], [2, 4]) повертає[2]
// Виклик getCommonElements([1, 2, 3], [2, 1, 17, 19]) повертає[1, 2]
// Виклик getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]) повертає[12, 27, 3]
// Виклик getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]) повертає[10, 30, 40]
// Виклик getCommonElements([1, 2, 3], [10, 20, 30]) повертає[]
// Виклик функції getCommonElements() з випадковими двома масивами повертає правильний масив
// В циклі for використовувалися методи includes і push

// function getCommonElements(array1, array2) {
//     const commonElements = [];

//     for (const element of array1) {
//         if (array2.includes(element)) {
//             commonElements.push(element);
//         }
//     }

//     return commonElements;
// }

// console.log(getCommonElements([1, 2, 3], [2, 4])); // [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); // [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); // [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); // []

// У цій функції ми перебираємо кожний елемент з array1 і перевіряємо,
// чи він міститься в array2 за допомогою методу includes.Якщо так,
// то додаємо цей елемент до масиву commonElements.Результатом функції є масив спільних елементів.


// #26

// Виконай рефакторинг коду функції calculateTotalPrice(order), замінивши цикл for на for...of.

// Оголошена функція calculateTotalPrice(order)
// Виклик функції calculateTotalPrice([12, 85, 37, 4]) повертає 138
// Виклик функції calculateTotalPrice([164, 48, 291]) повертає 503
// Виклик функції calculateTotalPrice([412, 371, 94, 63, 176]) повертає 1116
// Виклик функції calculateTotalPrice([]) повертає 0
// Виклик функції calculateTotalPrice() з випадковим масивом чисел повертає правильну суму

// function calculateTotalPrice(order) {
//     let total = 0;

//     for (const price of order) {
//         total += price;
//     }

//     return total;
// }

// console.log(calculateTotalPrice([12, 85, 37, 4])); // 138
// console.log(calculateTotalPrice([164, 48, 291])); // 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176])); // 1116
// console.log(calculateTotalPrice([])); // 0

// В цьому випадку ми використовуємо цикл for...of,
// який автоматично перебирає значення з масиву order і додає їх до змінної total.


// #27

// Виконай рефакторинг функції filterArray(numbers, value), замінивши цикл for на for...of.

// Оголошена функція filterArray(numbers, value)
// Виклик функції filterArray([1, 2, 3, 4, 5], 3) повертає[4, 5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 4) повертає[5]
// Виклик функції filterArray([1, 2, 3, 4, 5], 5) повертає[]
// Виклик функції filterArray([12, 24, 8, 41, 76], 38) повертає[41, 76]
// Виклик функції filterArray([12, 24, 8, 41, 76], 20) повертає[24, 41, 76]
// Виклик функції filterArray() з випадковим масивом і числом повертає правильний масив
// Функція filterArray() використовує цикл for..of

// function filterArray(numbers, value) {
//     const filteredArray = [];

//     for (const number of numbers) {
//         if (number > value) {
//             filteredArray.push(number);
//         }
//     }

//     return filteredArray;
// }

// console.log(filterArray([1, 2, 3, 4, 5], 3)); // [4, 5]
// console.log(filterArray([1, 2, 3, 4, 5], 4)); // [5]
// console.log(filterArray([1, 2, 3, 4, 5], 5)); // []
// console.log(filterArray([12, 24, 8, 41, 76], 38)); // [41, 76]
// console.log(filterArray([12, 24, 8, 41, 76], 20)); // [24, 41, 76]

// В даному випадку ми використовуємо цикл for...of, який автоматично перебирає значення з масиву numbers і
//  додає їх до масиву filteredArray, якщо вони задовольняють умову.


// #28

// Доповни вираз остачі від ділення таким чином, щоб код проходив тести.

// Оголошена змінна a
// Значення змінної a - це число 0
// Оголошена змінна b
// Значення змінної b - це число 1
// Оголошена змінна c
// Значення змінної c - це число 3
// Оголошена змінна d
// Значення змінної d - це число 5
// Оголошена змінна e
// Значення змінної e - це число 2

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 8;
// const d = 12 % 7;
// const e = 8 % 6;

// console.log(a, b, c, d, e); // 0 1 2 0 1

// // const a = 3 % ;
// // const b = 4 % ;
// // const c = 11 % ;
// // const d = 12 % ;
// // const e = 8 % ;

// #29

// Напиши функцію getEvenNumbers(start, end), яка повертає масив усіх парних чисел від start до end.
// Парним вважається число, яке ділиться на 2 без остачі(10 % 2 === 0).

// Оголошена функція getEvenNumbers(start, end)
// Виклик функції getEvenNumbers(2, 5) повертає[2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає[4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає[6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає[8]
// Виклик функції getEvenNumbers(7, 7) повертає[]
// Виклик функції getEvenNumbers() з випадковими start і end повертає правильний масив

// function getEvenNumbers(start, end) {
//     const evenNumbers = [];

//     for (let i = start; i <= end; i++) {
//         if (i % 2 === 0) {
//             evenNumbers.push(i);
//         }
//     }

//     return evenNumbers;
// }

// console.log(getEvenNumbers(2, 5));

// Виклик функції getEvenNumbers(2, 5) повертає[2, 4]
// Виклик функції getEvenNumbers(3, 11) повертає[4, 6, 8, 10]
// Виклик функції getEvenNumbers(6, 12) повертає[6, 8, 10, 12]
// Виклик функції getEvenNumbers(8, 8) повертає[8]
// Виклик функції getEvenNumbers(7, 7) повертає[]
// Виклик функції getEvenNumbers() з випадковим масивом і числом повертає правильний масив

// Ця функція створює порожній масив evenNumbers, потім використовує цикл for для
// перебору всіх чисел від start до end.Якщо число є парним(ділиться на 2 без остачі),
// воно додається до масиву evenNumbers.На завершення, масив з парними числами повертається як результат.

// #30

// Доповни код таким чином, щоб у змінну number записувалося перше число від start до end,
//  яке ділиться на 5 без остачі.

// Оголошена змінна start зі значенням 6
// Оголошена змінна end зі значенням 27
// Оголошена змінна number без ініціалізації
// Підсумкове значення змінної number дорівнює 10
// В циклі for використовується break для виходу до завершення усіх ітерацій циклу

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i <= end; i++) {
//     if (i % 5 === 0) {
//         number = i;
//         break;
//     }
// }

// console.log(number); // Виводить 10

// У цьому коді ми перебираємо числа від start до end включно, і якщо знайдено число,
// яке ділиться на 5 без остачі, ми присвоюємо його значення змінній number та
// виходимо з циклу за допомогою ключового слова break.

// #31

// Виконай рефакторинг функції findNumber(start, end, divisor) таким чином, щоб вона:

// повертала перше число від start до end, яке ділиться на divisor без остачі
// не використала оператор break
// не використала змінну number
// Оголошена функція findNumber(start, end, divisor)
// Виклик findNumber(2, 6, 5) повертає 5
// Виклик findNumber(8, 17, 3) повертає 9
// Виклик findNumber(6, 9, 4) повертає 8
// Виклик findNumber(16, 35, 7) повертає 21
// Виклик findNumber() з випадковим набором чисел повертає правильний результат
// В циклі for не повинен використовуватися break для виходу до завершення всіх ітерацій циклу

// function findNumber(start, end, divisor) {
//     for (let i = start; i <= end; i++) {
//         if (i % divisor === 0) {
//             return i;
//         }
//     }
// }

// console.log(findNumber(2, 6, 5));   // Виводить 5
// console.log(findNumber(8, 17, 3));  // Виводить 9
// console.log(findNumber(6, 9, 4));   // Виводить 8
// console.log(findNumber(16, 35, 7)); // Виводить 21

// У цьому коді ми перебираємо числа від start до end включно,
// і якщо знайдено число, яке ділиться на divisor без остачі,
// ми відразу повертаємо це число.Таким чином,
// ми уникнули використання оператора break і зайвої змінної number.

// #32

// Напиши функцію includes(array, value), яка робить те саме, що і метод масиву масив.includes(значення) - перевіряє, 
// чи присутнє в масиві array значення value, повертаючи true, якщо присутнє, і false в іншому випадку.

// При виконанні цього завдання в тілі функції includes() не можна використовувати метод масив.includes(значення).

// Оголошена функція includes(array, value)
// Виклик includes([1, 2, 3, 4, 5], 3) повертає true
// Виклик includes([1, 2, 3, 4, 5], 17) повертає false
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter") повертає true
// Виклик includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") повертає false
// Виклик includes(["apple", "plum", "pear", "orange"], "plum") повертає true
// Виклик includes(["apple", "plum", "pear", "orange"], "kiwi") повертає false
// Виклик includes() для випадкового масиву з випадковим value повертає правильний boolean
// У функції includes використовується for, return, але не метод масиву includes

// function includes(array, value) {
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] === value) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(includes([1, 2, 3, 4, 5], 3)); // Виводить true
// console.log(includes([1, 2, 3, 4, 5], 17)); // Виводить false
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter")); // Виводить true
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus")); // Виводить false
// console.log(includes(["apple", "plum", "pear", "orange"], "plum")); // Виводить true
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi")); // Виводить false

// У цій функції ми перебираємо елементи масиву array за допомогою циклу for,
// порівнюючи кожен елемент з value.Якщо знайдено співпадіння,
// функція відразу повертає true.Якщо ж жоден елемент не збігається з value, функція повертає false.