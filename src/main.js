import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { createMarkupItem } from './js/render-functions';
import { fetchPhotosByQuery } from './js/pixabay-api';



const galleryEl = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.search-form');
const loader = document.querySelector('.loader');
const searchField = document.querySelector('.search-field')

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

function onSearchFormSubmit(event) {
  event.preventDefault();

  const searchQuery = searchField.value.trim();
    
  if (searchQuery === '') {
    galleryEl.innerHTML = '';
    event.target.reset();
    iziToast.error({
      title: 'Error',
      message: 'Illegal operation',
      position: 'topRight',
      timeout: 2000,
    });
    loader.style.display = 'none';
    return;
  }
  galleryEl.innerHTML = '';
  loader.classList.remove('is-hidden');

  fetchPhotosByQuery(searchQuery)
    .then(imagesData => {
      if (imagesData.totalHits === 0) {
        iziToast.show({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          position: 'topRight',
          timeout: 2000,
          color: 'red',
        });
      galleryEl.innerHTML = ''; // Очищаємо розмітку галереї
      } else {
        galleryEl.innerHTML = createMarkupItem(imagesData.hits);
        lightbox.refresh(); // Оновлюємо екземпляр lightbox
      }
         })

    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loader.classList.add('is-hidden');
    });
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);