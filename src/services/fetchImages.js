const paramsSearch = {
  url: 'https://pixabay.com/api/',
  key: '34476272-8eefbecdf655f62236187bd3a',
  q: '',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
  per_page: 12,
};

export function fetchImages(searchQuery, page = 1) {
  const urlParams = [
    `q=${searchQuery}`,
    `page=${page}`,
    `key=${paramsSearch.key}`,
    `image_type=${paramsSearch.image_type}`,
    `orientation=${paramsSearch.orientation}`,
    `safesearch=${paramsSearch.safesearch}`,
    `per_page=${paramsSearch.per_page}`,
  ];
  const url = `${paramsSearch.url}?${urlParams.join('&')}`;

  return (
    fetch(url)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Oops, there is no images with that name ${searchQuery}`)
        );
      })
      // .then(data => data.hits);
      .then(data => ({ total: data.totalHits, images: data.hits }))
  );
}
