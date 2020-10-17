const apiKey = '4f9247102eec4d87b26bd9519aec124e'
export default function getGifs({keyword = 'morty'} = {}){
    const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=25&offset=0&rating=g&lang=en`
    return fetch(apiURL)
      .then(res => res.json())
      .then(response => {
        const {data} = response;
        const gifs = data.map(image => {
            
            const {images, title, id} = image;
            const { url } = images.downsized_medium;
            
            return { title, id, url };
        });
        return gifs;
      })
}