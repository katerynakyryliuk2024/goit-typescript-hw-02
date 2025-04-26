import css from "./SearchBar.module.css";
import { Formik, Field, Form } from "formik";
import toast, { Toaster } from "react-hot-toast";

interface SearchBarProps {
  onSearch: (topic: string) => void;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  return (
    <header>
      <Formik
        initialValues={{
          info: "",
        }}
        onSubmit={(values, actions) => {
          if (!values.info.trim()) {
            toast.error("please full fill some searching info");
            return;
          }
          onSearch(values.info);
          actions.resetForm();
        }}
      >
        <Form className={css.searchForm}>
          <Field
            className={css.searchİnput}
            type="text"
            name="info"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
          <button className={css.searchBnt} type="submit">
            Search
          </button>
          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                background: "blue",
                color: "yellow",
              },
            }}
          />
        </Form>
      </Formik>
    </header>
  );
}
