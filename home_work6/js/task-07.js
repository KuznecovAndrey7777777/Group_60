// Завдання 7
// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і
// змінює інлайн - стиль span#text, оновлюючи властивість font - size.В результаті,
//   перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>

const fontSizeControl = document.getElementById('font-size-control');
const textElement = document.getElementById('text');

fontSizeControl.addEventListener('input', () => {
  const fontSize = fontSizeControl.value + 'px';
  textElement.style.fontSize = fontSize;
});

// Цей сценарій прослуховує подію "введення" в діапазоні введення для керування розміром шрифту.
// Коли вхідне значення змінюється, він відповідно оновлює розмір шрифту текстового діапазону.
// Розмір шрифту встановлюється в пікселях на основі введеного значення.


// let controlFont = document.getElementById("font-size-control");
// let text = document.getElementById("text");

// controlFont.oninput = function () {
//   text.style.fontSize = controlFont.value + "px";
// };
