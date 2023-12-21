
import axios from 'axios';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { elements } from './elements';
import { BASE_URL, options } from './api';

const { galleryEl, searchInput, searchForm, loaderEl } = elements;

let totalHits = 0;
let isLoadingMore = false;
let reachedEnd = false;

const lightbox = new SimpleLightbox('.lightbox', {
    captionsData: 'alt',
    captionDelay: 250,
    enableKeyboard: true,
    showCounter: false,
    scrollZoom: false,
    close: false,
});

// У цій частині ви імпортуєте необхідні бібліотеки та ініціалізуєте змінні, такі як galleryEl, searchInput, тощо.Також створюєте екземпляр SimpleLightbox.

searchForm.addEventListener('submit', onFormSybmit);
window.addEventListener('scroll', onScrollHandler);
document.addEventListener('DOMContentLoaded', hideLoader);

function showLoader() {
    loaderEl.style.display = 'block';
}

function hideLoader() {
    loaderEl.style.display = 'none';
}

// У цій частині визначені функції для показу та приховування лоадера.

function renderGallery(hits) {
    const markup = hits
        .map(item => {
            return `
            <a href="${item.largeImageURL}" class="lightbox">
                <div class="photo-card">
                    <img src="${item.webformatURL}" alt="${item.tags}" loading="lazy" />
                    <div class="info">
                        <p class="info-item">
                            <b>Likes</b>
                            ${item.likes}
                        </p>
                        <p class="info-item">
                            <b>Views</b>
                            ${item.views}
                        </p>
                        <p class="info-item">
                            <b>Comments</b>
                            ${item.comments}
                        </p>
                        <p class="info-item">
                            <b>Downloads</b>
                            ${item.downloads}
                        </p>
                    </div>
                </div>
            </a>
            `;
        })
        .join('');

    galleryEl.insertAdjacentHTML('beforeend', markup);

    if (options.params.page * options.params.per_page >= totalHits) {
        if (!reachedEnd) {
            Notify.info("We're sorry, but you've reached the end of search results.");
            reachedEnd = true;
        }
    }
    lightbox.refresh();
}

// У цій частині визначена функція для рендеру галереї, яка отримує дані про зображення та вставляє їх в DOM.Також провіряється, чи досягнуто кінця результатів пошуку.

async function loadMore() {
    isLoadingMore = true;
    options.params.page += 1;
    try {
        showLoader();
        const response = await axios.get(BASE_URL, options);
        const hits = response.data.hits;
        renderGallery(hits);
    } catch (err) {
        Notify.failure(err);
        hideLoader();
    } finally {
        hideLoader();
        isLoadingMore = false;
    }
}

// Ця частина містить функцію loadMore, яка викликається при завантаженні додаткових зображень.Функція збільшує номер сторінки, відправляє запит і обробляє результат.

function onScrollHandler() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    const scrollThreshold = 300;
    if (
        scrollTop + clientHeight >= scrollHeight - scrollThreshold &&
        galleryEl.innerHTML !== '' &&
        !isLoadingMore &&
        !reachedEnd
    ) {
        loadMore();
    }
}

// Ця частина визначає функцію - обробник для події прокрутки сторінки, яка визиває loadMore, якщо користувач прокрутивши сторінку досить далеко.

async function onFormSybmit(e) {
    e.preventDefault();
    options.params.q = searchInput.value.trim();
    if (options.params.q === '') {
        return;
    }
    options.params.page = 1;
    galleryEl.innerHTML = '';
    reachedEnd = false;

    try {
        showLoader();
        const response = await axios.get(BASE_URL, options);
        totalHits = response.data.totalHits;
        const hits = response.data.hits;
        if (hits.length === 0) {
            Notify.failure(
                'Sorry, there are no images matching your search query. Please try again.'
            );
        } else {
            Notify.success(`Hooray! We found ${totalHits} images.`);
            renderGallery(hits);
        }
        searchInput.value = '';
        hideLoader();
    } catch (err) {
        Notify.failure(err);
        hideLoader();
    }
}

// Ця частина визначає функцію, яка викликається при поданні форми.Вона виконує пошук і рендерить результати.Також вона очищає галерею та провіряє, чи є результати для введеного запиту.

