import { galleryItems } from './gallery-items.js';
// Change code below this line

//* Add markup for gallery

const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
const makeGalleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href=${original}>
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`;
})
    .join('');

galleryEl.insertAdjacentHTML('beforeend', makeGalleryMarkup);
galleryEl.addEventListener('click', imgOpenModal);

//* Add modal window for gallery

function imgOpenModal(e) {
    e.preventDefault();

    if (e.target.nodeName !== 'IMG') {
        return;
    }

    const currentImage = e.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src="${currentImage}"width="700" height="500">`);
    instance.show();

    //* add Escape to the gallery

    window.addEventListener('keydown', pressEscapeKeyboard);
    function pressEscapeKeyboard(e) {
        if (e.code === 'Escape') {
            instance.close();
            window.removeEventListener('keydown', pressEscapeKeyboard);
        }
    }
}