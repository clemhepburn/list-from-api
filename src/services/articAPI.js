export const fetchArtworks = async () => {
  // eslint-disable-next-line max-len
  const res = await fetch('https://api.artic.edu/api/v1/artworks?fields=id,title,artist_display,date_display,thumbnail');
  const json = await res.json();

  return json.results;
};
