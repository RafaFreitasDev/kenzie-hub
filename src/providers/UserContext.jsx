import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

export const UserContext = createContext({});

export function UserProvider({ children }) {
  const navigate = useNavigate();

  const { reset } = useForm();

  const [user, setUser] = useState(null);
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingTech, setEditingTech] = useState(null);
  const [creating, setCreating] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("@KenzieHub:token");

    if (token) {
      async function userAutoLogin() {
        try {
          setLoading(true);
          const response = await api.get("/profile", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          console.log(loading);
          setUser(response.data);
          setTechs(response.data.techs);
          setLoading(false);
          navigate("/dashboard");
        } catch (error) {
          console.log(error);
          window.localStorage.removeItem("@KenzieHub:token");
        } finally {
          setLoading(false);
        }
      }
      userAutoLogin();
    }
  }, []);

  async function userRegister(formData) {
    try {
      const response = await api.post("/users", formData);

      navigate("/");
      toast.success("Cadastro com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function userLogin(formData) {
    try {
      const response = await api.post("/sessions", formData);

      window.localStorage.clear();
      window.localStorage.setItem("@KenzieHub:token", response.data.token);

      setTechs(response.data.user.techs);
      setUser(response.data.user);
      navigate("/dashboard");
      toast.success("Login com sucesso");
      reset();
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      reset();
    }
  }

  function userLogout() {
    window.localStorage.removeItem("@KenzieHub:token");
    navigate("/");
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRegister,
        userLogin,
        userLogout,
        techs,
        setTechs,
        loading,
        setLoading,
        editingTech,
        setEditingTech,
        creating,
        setCreating,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
