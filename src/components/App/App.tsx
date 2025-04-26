import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

interface UrlsPhoto {
  regular: string;
  small: string;
}

export interface Photo {
  urls: UrlsPhoto;
  description: string;
  id: string;
}

interface PhotosResultsResponse {
  results: Photo[];
}

export default function App() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [isLoading, setİsloading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [modalİsOpen, setModalİsOpen] = useState<boolean>(false);
  const [selectedİmage, setSelectedİmage] = useState<Photo | null>(null);

  const handleSearch = async (topic: string) => {
    setSearchTerm(`${topic}/${Date.now()}`);

    setPage(1);
    setPhotos([]);
  };

  const handleClick = () => {
    setPage(page + 1);
  };
  const openModal = (item: Photo) => {
    setSelectedİmage(item);
    setModalİsOpen(true);
  };

  const closeModal = () => {
    setModalİsOpen(false);
  };

  useEffect(() => {
    if (searchTerm === "") {
      return;
    }
    async function getData() {
      try {
        setError(false);
        setİsloading(true);
        const data = await fetchPhotos(searchTerm.split("/")[0], page);
        console.log(data);
        setPhotos((prevPhotos) => {
          return [...prevPhotos, ...data];
        });
      } catch {
        setError(true);
      } finally {
        setİsloading(false);
      }
    }
    getData();
  }, [page, searchTerm]);

  return (
    <>
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}

      {photos.length > 0 && (
        <ImageGallery items={photos} onImageClick={openModal} />
      )}

      {selectedİmage !== null && (
        <ImageModal
          isOpen={modalİsOpen}
          onClose={closeModal}
          image={selectedİmage}
        />
      )}

      {isLoading && <Loader />}

      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </>
  );
}
