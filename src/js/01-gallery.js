// Add imports above this line

import { galleryItems } from './gallery-items';

import SimpleLightbox from "simplelightbox";

import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line

console.log(galleryItems);


const galleryContainer = document.querySelector(".gallery");

const newPicturesMarkup = createNewGallaryItems(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", newPicturesMarkup);

function pictures ({ preview, original, description }) {
  return `
<li class="gallery__item">
<a class="gallery__link" href="${original}">
<img
  class="gallery__image"
  src="${preview}"
  data-source="${original}"
  alt="${description}"
/>
</a>
</li>
`;
}

function createNewGallaryItems(pictures) {
  return pictures
    .map(({ preview, original, description }) => {
      return `
<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>
`;
    })
    .join("");
}

  const lightbox = new SimpleLightbox(".gallery a", {
    'captionsData': 'alt',
    'captionDelay': 2500, 
  });

