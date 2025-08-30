import axios from "axios";

const searchImages = async (searchTerm) => {
  const response = await axios.get(`https://api.unsplash.com/search/photos`, {
    params: { query: searchTerm },
    headers: {
      Authorization: 'Client-ID rjeS_s6ujRms4za8TABqJ4rHs03IInQOVwavM2cGJNg'
    }
  });
  return response.data.results;
};

export default searchImages;