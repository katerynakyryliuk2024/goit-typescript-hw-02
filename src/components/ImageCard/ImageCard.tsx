import { Photo } from "../App/App";
import css from "./ImageCard.module.css";

interface ImageCardProps {
  item: Photo;
  onClick: () => void;
}

export default function ImageCard({ item, onClick }: ImageCardProps) {
  return (
    <div>
      <img
        className={css.galleryİmg}
        src={item.urls.small}
        alt={item.description}
        onClick={onClick}
      />
    </div>
  );
}
