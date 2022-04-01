import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const bookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("@ioasys:token") || ""
  );
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(10);
  const [allPages, setAllPages] = useState(0);

  const handleListBooks = async () => {
    await api
      .get(`/books?page=${page}&amount=${perPage}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => {
        setAllPages(resp.data.totalPages);
        setBooks(resp.data.data);
      })
      .catch((err) => console.log(err.response));
  };

  return (
    <bookContext.Provider
      value={{ handleListBooks, books, setToken, allPages, page, setPage }}
    >
      {children}
    </bookContext.Provider>
  );
};

export const useBook = () => useContext(bookContext);
