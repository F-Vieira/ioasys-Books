import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const bookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [token] = useState(localStorage.getItem("@ioasys:token") || "");

  const handleListBooks = () => {
    api
      .get("/books?page=1&amount=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setBooks(resp.data.data))
      .catch((err) => console.log(err.response));
  };

  useEffect(() => {
    handleListBooks();
  }, [token]);

  return (
    <bookContext.Provider value={{ handleListBooks, books }}>
      {children}
    </bookContext.Provider>
  );
};

export const useBook = () => useContext(bookContext);
