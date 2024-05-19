import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { fetchPhotosByQuery } from './js/pixabay-api.js';
import { clearGallery, showLoader, hideLoader, showNoResults, hideNoResults, renderImages } from './js/render-functions.js';

document.getElementById('search-form').addEventListener('submit', async (event) => {
  event.preventDefault();
  
  const query = document.getElementById('search-input').value.trim();
  
  if (query === '') {
    iziToast.error({
      title: 'Error',
      message: 'Search query cannot be empty!',
    });
    return;
  }
  
  clearGallery();
  hideNoResults();
  showLoader();
  
  try {
    const imagesData = await fetchPhotosByQuery(query);
    
    if (imagesData.hits.length === 0) {
      showNoResults();
    } else {
      renderImages(imagesData.hits);
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to fetch images. Please try again later.',
    });
  } finally {
    hideLoader();
  }
});