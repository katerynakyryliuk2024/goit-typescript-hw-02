import { useEffect, useState } from "react";
import { fetchPhotos } from "../PhotoSearch";
import SearchBar from "../SearchBar/SearchBar";
import ImageGallery from "../ImageGallery/ImageGallery";
import Loader from "../Loader/Loader";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import LoadMoreBtn from "../LoadMoreBtn/LoadMoreBtn";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
  const [photos, setPhotos] = useState([]);
  const [isLoading, setİsloading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [modalİsOpen, setModalİsOpen] = useState(false);
  const [selectedİmage, setSelectedİmage] = useState(null);

  const handleSearch = async (topic) => {
    setSearchTerm(`${topic}/${Date.now()}`);

    setPage(1);
    setPhotos([]);
  };

  const handleClick = () => {
    setPage(page + 1);
  };
  const openModal = (item) => {
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

      <ImageModal
        isOpen={modalİsOpen}
        onClose={closeModal}
        image={selectedİmage}
      />

      {isLoading && <Loader />}

      {photos.length > 0 && !isLoading && (
        <LoadMoreBtn handleClick={handleClick} />
      )}
    </>
  );
}
