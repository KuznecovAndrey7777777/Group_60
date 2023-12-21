export const elements = {
    galleryEl: document.querySelector('.gallery'),
    searchInput: document.querySelector('input[name="searchQuery"'),
    searchForm: document.getElementById('search-form'),
    loaderEl: document.querySelector('.loader'),
};


// У цьому коді визначений об'єкт elements, який містить посилання на різні HTML елементи сторінки. Ці посилання зберігаються в об'єкті, щоб їх можна було легко використовувати в коді.

//     galleryEl: Елемент галереї, який відповідає за відображення зображень на сторінці.Визначений за допомогою document.querySelector('.gallery').

//         searchInput: Текстове поле для введення пошукового запиту.Визначено за допомогою document.querySelector('input[name="searchQuery"').

//             searchForm: Форма пошуку, яку користувач використовує для введення запиту та відправки його на сервер.Визначена за допомогою document.getElementById('search-form').

//                 loaderEl: Елемент завантаження, який відображається під час завантаження нових зображень або взаємодії з сервером.Визначений за допомогою document.querySelector('.loader').

// Ці посилання на елементи сторінки дозволяють легко маніпулювати їхнім вмістом та станом у коді за допомогою JavaScript.