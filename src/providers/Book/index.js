import { createContext, useContext, useState } from "react";
import api from "../../services/api";

const bookContext = createContext();

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);
  const [token, setToken] = useState(
    localStorage.getItem("@ioasys:token") || ""
  );

  const handleListBooks = async () => {
    await api
      .get("/books?page=1&amount=10", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((resp) => setBooks(resp.data.data))
      .catch((err) => console.log(err.response));
  };

  return (
    <bookContext.Provider value={{ handleListBooks, books, setToken }}>
      {children}
    </bookContext.Provider>
  );
};

export const useBook = () => useContext(bookContext);
