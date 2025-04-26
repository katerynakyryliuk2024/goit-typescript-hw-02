import css from "./LoadMoreBtn.module.css";

interface LoadMoreBtnProps {
  handleClick: () => void;
}

export default function LoadMoreBtn({ handleClick }: LoadMoreBtnProps) {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn} type="submit">
      Load more
    </button>
  );
}
