// USANDO node.js 18
export const getGifs = async (category) => {
const url = `https://api.giphy.com/v1/gifs/search?api_key=BvnyASmMec9Gui3EpVaTBzWVJC0lME37&limit=20&q=${category}`;
  const resp = await fetch(url);
  const {data} = await resp.json();
  // console.log('>> resp API', data);
  const gifsList = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
    };
  });

  console.log(">> gifsList", gifsList);
  return gifsList;
};

// USANDO node.js 16
// export const getGifs = (newSearchCategory) => {
//   const url = `https://api.giphy.com/v1/gifs/search?api_key=BvnyASmMec9Gui3EpVaTBzWVJC0lME37&limit=20&q=${newSearchCategory}`;
//   fetch(url)
//     .then((request) => request.json())
//     .then((resp) => {
//       const { data } = resp;
//       const gifsList = data.map((gif) => {
//         return {
//           id: gif.id,
//           title: gif.title,
//           url: gif.images.downsized_medium.url,
//         };
//       });

//       console.log(">> gifsList", gifsList);
//       return gifsList;
//     });
// };
