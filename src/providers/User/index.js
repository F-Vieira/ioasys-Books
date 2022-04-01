import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const userContext = createContext();

export const UserProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [error, setError] = useState("");

  const handleLogin = (data) => {
    api
      .post("/auth/sign-in", data)
      .then((resp) => {
        setLoading(true);
        setTimeout(() => {
          const token = resp.headers.authorization;
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
      navigate("/home");
    }
  }, [loading, navigate]);

  return (
    <userContext.Provider value={{ handleLogin, error }}>
      {children}
    </userContext.Provider>
  );
};

export const useUser = () => useContext(userContext);
