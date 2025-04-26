import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";
import { Photo } from "../App/App";

interface ImageGalleryProps {
  items: Photo[];
  onImageClick: (item: Photo) => void;
}

export default function ImageGallery({
  items,
  onImageClick,
}: ImageGalleryProps) {
  return (
    <ul className={css.list}>
      {items.map((item) => (
        <li key={item.id}>
          <ImageCard item={item} onClick={() => onImageClick(item)} />
        </li>
      ))}
    </ul>
  );
}
