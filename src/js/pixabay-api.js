export function getImage(value){
    const KEY = `43075807-09317d918fe027bf1568df9fe`;
    const BASE_URL = 'https://pixabay.com/api/';
    const params = new URLSearchParams({
        key: KEY,
        q: value,
        image_type: 'photo',
        orientation: 'horizontal',
        per_page: 30,
        safesearch: true,
      });
      const url = `${BASE_URL}?${params}`;
    
      return fetch(url).then(res => res.json());
    }
