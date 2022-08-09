import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryEl = document.querySelector('.gallery');

const markup = createItems(galleryItems);

function createItems(items) {
    return items.map(({ original, preview, description }) => {
    return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    }).join('');
};
galleryEl.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 250,
    captionPosition: 'bottom',
});

