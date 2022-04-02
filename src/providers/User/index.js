import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { useBook } from "../Book";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  const [error, setError] = useState("");

  const { page, handleListBooks, setToken } = useBook();

  const handleLogin = (data) => {
    api
      .post("/auth/sign-in", data)
      .then((resp) => {
        setLoading(true);
        setTimeout(() => {
          setUser(resp.data);
          const token = resp.headers.authorization;
          setToken(token);
          localStorage.setItem("@ioasys:token", token);
          setLoading(false);
        }, 2000);
      })
      .catch((_) => {
        setError("E-mail e/ou senha incorretos.");
      });
  };

  useEffect(() => {
    if (!loading && localStorage.getItem("@ioasys:token") !== null) {
      handleListBooks();

      setTimeout(() => {
        navigate("/home");
      }, 2000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading, navigate, page]);

  return (
    <userContext.Provider value={{ handleLogin, error, user }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
