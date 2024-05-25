import { createMarkupItem } from './render-functions';
import { fetchPhotosByQuery } from './pixabay-api';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const galleryEl = document.querySelector('.gallery');
const searchFormEl = document.querySelector('.search-form');
const loaderEl = document.querySelector('.loader');
const searchField  = document.querySelector('.search-field')

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
  loaderEl.classList.remove('is-hidden');

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
      }
      galleryEl.innerHTML = createMarkupItem(imagesData.hits);
    })

    .catch(error => console.log(error))
    .finally(() => {
      event.target.reset();
      loaderEl.classList.add('is-hidden');
    });

  input.value = '';
  form.reset();
}

searchFormEl.addEventListener('submit', onSearchFormSubmit);