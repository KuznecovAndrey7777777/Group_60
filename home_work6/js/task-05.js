// Завдання 5
// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input),
// підставляє його поточне значення в span#name - output.Якщо інпут порожній,
//   у спані повинен відображатися рядок "Anonymous".

// <input type="text" id="name-input" placeholder="Please enter your name" />
// <h1>Hello, <span id="name-output">Anonymous</span>!</h1>

const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

nameInput.addEventListener('input', () => {
  nameOutput.textContent = nameInput.value || 'Anonymous';
});

// Цей скрипт прослуховує подію «введення» у полі введення імені.Коли користувач вводить вхідні дані,
//   він оновлює текстовий вміст діапазону імен - виводів поточним значенням вхідних даних.Якщо поле введення порожнє,
//     відображається «Анонім».


// let input = document.getElementById("name-input");
// let nameOutput = document.getElementById("name-output");

// input.oninput = function () {
//   if (input.value === "") {
//     nameOutput.innerHTML = "Anonymous";
//   } else {
//     nameOutput.innerHTML = input.value;
//   }
// };
