import axios from "axios";

export const fetchPhotos = async (topic, currentPage) => {
  const response = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=SDdus_L-2oATcnD6jLgUwbLq6gPjNKxLCEuAo_e6nIA`,
    {
      params: {
        query: topic,
        per_page: 6,
        page: currentPage,
      },
    }
  );
  return response.data.results;
};
