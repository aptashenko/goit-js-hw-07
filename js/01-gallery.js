
import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const markup = createItems(galleryItems);

function createItems (items) {
    return items.map(({original, preview, description}) => {
    return `<div class="gallery__item">
            <a class="gallery__link" href="${original}">
                <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
                />
            </a>
        </div>`;
}).join('');
};

galleryEl.insertAdjacentHTML('beforeend', markup);

galleryEl.addEventListener('click', openImage);

function openImage(e) {
    e.preventDefault();
    if (e.target.nodeName !== 'IMG') {
        return;
    }
    const instance = basicLightbox.create(`
    <img src="${e.target.dataset.source}" width="800" height="600">
`)

instance.show()
}
