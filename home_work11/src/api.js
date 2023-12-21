export const BASE_URL = 'https://pixabay.com/api/';
export const API_KEY = '31731640-63415b264c7abe0734c9208e1';
export const options = {
    params: {
        key: API_KEY,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 40,
        page: 1,
        q: '',
    },
};


// У цьому коді визначені константи та об'єкт опцій для взаємодії з API сервісу Pixabay.

// BASE_URL: Це URL, за допомогою якого ви взаємодієте з API Pixabay.Всі запити будуть спрямовані на цей URL.

//     API_KEY: Ключ доступу до API Pixabay.Ключ вам присвоюється під час реєстрації на Pixabay, і ви використовуєте його для авторизації запитів.

//         options: Це об'єкт з параметрами для запиту до API Pixabay. Об'єкт включає ряд параметрів, які будуть використовуватися при кожному запиті, такі як тип зображення(image_type), орієнтація(orientation), фільтр за безпекою(safesearch), кількість результатів на сторінці(per_page), номер сторінки(page), та пошуковий запит(q).У цьому коді значення деяких параметрів зафіксовані, такі як image_type та orientation, тоді як інші можуть змінюватися в залежності від контексту.

// Цей об'єкт options можна передавати як параметр у запитах Axios до API Pixabay, щоб вказати параметри пошуку.