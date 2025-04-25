import css from "./LoadMoreBtn.module.css";

export default function LoadMoreBtn({ handleClick }) {
  return (
    <button onClick={handleClick} className={css.loadMoreBtn} type="submit">
      Load more
    </button>
  );
}
