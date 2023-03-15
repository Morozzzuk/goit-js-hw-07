import { galleryItems } from './gallery-items.js';
// Change code below this line

//* Add markup for gallery
const galleryEl = document.querySelector('.gallery');
// console.log(galleryEl);
const makeGalleryMarkup = galleryItems
    .map(({ preview, original, description }) => {
    return `<a class="gallery__item" href=${original}>
    <img class="gallery__image"
    src=${preview} 
    alt="${description}" />
    </a>`
})
    .join('');
    
galleryEl.insertAdjacentHTML('beforeend', makeGalleryMarkup);
    
//* Add SimpleLightbox
    new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});