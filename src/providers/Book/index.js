import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const bookContext = createContext();

export const BookProvider = ({ children }) => {
  const [token, setToken] = useState(
    localStorage.getItem("@ioasys:token") || ""
  );

  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});

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

  const handleRetrieveBook = (bookId) => {
    api
      .get(`/books/${bookId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => console.log(resp.data))
      .catch((err) => console.log(err.response));
  };

  return (
    <bookContext.Provider
      value={{
        handleListBooks,
        handleRetrieveBook,
        books,
        setToken,
        allPages,
        page,
        setPage,
      }}
    >
      {children}
    </bookContext.Provider>
  );
};

export const useBook = () => useContext(bookContext);
