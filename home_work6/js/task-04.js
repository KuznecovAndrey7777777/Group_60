// Завдання 4
// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

// <div id="counter">
//   <button type="button" data-action="decrement">-1</button>
//   <span id="value">0</span>
//   <button type="button" data-action="increment">+1</button>
// </div>

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const valueSpan = document.getElementById('value');
const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateValue();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateValue();
});

function updateValue() {
  valueSpan.textContent = counterValue;
}

// Цей сценарій ініціалізує лічильник зі значенням 0 і додає прослуховувачі подій клацання до 
// кнопок зменшення та збільшення.Натискання кнопок оновлює значення лічильника та відображає зміни

// const button = {
//   sub: document.querySelector("[data-action='increment']"),
//   add: document.querySelector("[data-action='decrement']"),
//   span: document.querySelector("#value"),
// };

// let counterValue = 0;

// const increment = () => {
//   counterValue += 1;
//   button.span.textContent = counterValue;
// };

// const decrement = () => {
//   counterValue -= 1;
//   button.span.textContent = counterValue;
// };

// button.sub.addEventListener("click", increment);
// button.add.addEventListener("click", decrement);
