import axios from "axios";
import { Photo } from "./App/App";

interface PhotosResultsResponse {
  results: Photo[];
}

export const fetchPhotos = async (
  topic: string,
  currentPage: number
): Promise<Photo[]> => {
  const response = await axios.get<PhotosResultsResponse>(
    `https://api.unsplash.com/search/photos?client_id=SDdus_L-2oATcnD6jLgUwbLq6gPjNKxLCEuAo_e6nIA`,
    {
      params: {
        query: topic,
        per_page: 6,
        page: currentPage,
      },
    }
  );

  console.log(response.data);
  return response.data.results;
};
