// Завдання 3
// Напиши скрипт для створення галереї зображень на підставі масиву даних. HTML містить список ul.gallery.

// <ul class="gallery"></ul>

// Використовуй масив об'єктів images для створення елементів <img>, вкладених в <li>. Для створення розмітки використовуй шаблонні рядки і метод insertAdjacentHTML().

// Усі елементи галереї повинні додаватися в DOM за одну операцію додавання.
// Додай мінімальне оформлення галереї флексбоксами або грідами через CSS класи.
// const images = [
//   {
//     url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
//     alt: "White and Black Long Fur Cat",
//   },
//   {
//     url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
//     alt: "Orange and White Koi Fish Near Yellow Koi Fish",
//   },
//   {
//     url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
//     alt: "Group of Horses Running",
//   },
// ];


const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector('.gallery');

const galleryItems = images.map(image => {
  const listItem = document.createElement('li');
  listItem.classList.add('gallery-item');

  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.width = 300; // Set your desired width

  listItem.appendChild(img);
  return listItem;
});

galleryList.append(...galleryItems);

// Цей скрипт створює список зображень і додає їх до елемента ul.gallery. 