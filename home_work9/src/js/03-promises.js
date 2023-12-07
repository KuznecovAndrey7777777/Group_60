import Notiflix from 'notiflix';

// Отримайте елемент форми
const form = document.querySelector('.form');

// Додайте обробник події для форми
form.addEventListener('submit', function (event) {
  // Зупиніть стандартну дію форми
  event.preventDefault();

  // Отримайте значення полів форми
  const delay = parseInt(form.elements.delay.value);
  const step = parseInt(form.elements.step.value);
  const amount = parseInt(form.elements.amount.value);

  // Викликайте функцію createPromise стільки разів, скільки введено в поле "Amount"
  for (let i = 0; i < amount; i++) {
    createPromise(i + 1, delay + i * step);
  }
});

// Функція для створення промісу
function createPromise(position, delay) {
  const promise = new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;

    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });

  // Використовуйте Notiflix для відображення повідомлень
  promise
    .then(({ position, delay }) => {
      Notiflix.Notify.Success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.Failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
}
