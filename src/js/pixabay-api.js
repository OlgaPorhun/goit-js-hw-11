const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '43965450-8f7f6d09b5429fd61500b9928';

export async function fetchPhotosByQuery(query) {
  const url = `${BASE_URL}?key=${API_KEY}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error('Failed to fetch images');
  }
  
  const data = await response.json();
  return data;
}