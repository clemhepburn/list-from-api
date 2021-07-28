/* eslint-disable max-len */
export const fetchArtworks = async () => {
  const res = await fetch('https://api.artic.edu/api/v1/artworks?limit=48');
  console.log(res);
  const json = await res.json();
  console.log(json);

  return json.data;
};
