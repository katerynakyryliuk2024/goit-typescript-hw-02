import ScaleLoader from "react-spinners/ScaleLoader";
import css from './Loader.module.css'



export default function Loader() {
    return <ScaleLoader className={css.loader } />;
}
