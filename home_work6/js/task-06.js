// Завдання 6
// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
// перевіряє його вміст щодо правильної кількості введених символів.

// <input
//   type="text"
//   id="validation-input"
//   data-length="6"
//   placeholder="Please enter 6 symbols"
// />

// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

// #validation-input {
//   border: 3px solid #bdbdbd;
// }

// #validation-input.valid {
//   border-color: #4caf50;
// }

// #validation-input.invalid {
//   border-color: #f44336;
// }

const validationInput = document.getElementById('validation-input');

validationInput.addEventListener('blur', () => {
  const expectedLength = parseInt(validationInput.getAttribute('data-length'), 10);
  const currentLength = validationInput.value.length;

  if (currentLength === expectedLength) {
    validationInput.classList.add('valid');
    validationInput.classList.remove('invalid');
  } else {
    validationInput.classList.add('invalid');
    validationInput.classList.remove('valid');
  }
});

// Цей сценарій додає прослуховувач подій для події "розмиття" в полі введення перевірки.
// Коли введення втрачає фокус, він перевіряє довжину введеного тексту на очікувану довжину,
//   указану в атрибуті data - length.Залежно від того, правильний він чи ні,
//     він додає відповідний клас CSS(дійсний чи недійсний), щоб змінити колір межі.



// const textInput = document.querySelector("#validation-input");
// console.log(textInput.getAttribute("data-length"));
// textInput.addEventListener("blur", (Event) => {
//   if (Event.target.value.length == textInput.getAttribute("data-length")) {
//     textInput.classList.add("valid");
//     if (textInput.classList.contains("invalid")) {
//       textInput.classList.remove("invalid");
//     }
//   } else {
//     if (textInput.classList.contains("valid")) {
//       textInput.classList.remove("valid");
//     }
//     textInput.classList.add("invalid");
//   }
// });
