import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector('.gallery');

function createGalleryItem({ preview, original, description }) {
    const galleryItem = document.createElement('div');
    galleryItem.className = 'gallery__item';

    const galleryLink = document.createElement('a');
    galleryLink.className = 'gallery__link';
    galleryLink.href = original;

    const galleryImage = document.createElement('img');
    galleryImage.className = 'gallery__image';
    galleryImage.src = preview;
    galleryImage.setAttribute('data-source', original);
    galleryImage.alt = description;

    galleryLink.appendChild(galleryImage);
    galleryItem.appendChild(galleryLink);

    return galleryItem;
}

const items = galleryItems.map(createGalleryItem);
gallery.append(...items);

gallery.addEventListener('click', (event) => {
    event.preventDefault();
    const target = event.target;

    if (target.nodeName !== 'IMG') {
        return;
    }

    const instance = basicLightbox.create(`<img src=${target.dataset.source}>`, {
        onShow: () => document.addEventListener('keydown', onModalCloseToEscape),
        onClose: () => document.removeEventListener('keydown', onModalCloseToEscape),
    });

    instance.show();

    function onModalCloseToEscape(event) {
        if (event.code === 'Escape') {
            instance.close();
        }
    }
});