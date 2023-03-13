import { useContext } from "react";
import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export function TechProvider({ children }) {
  const { techs, setTechs } = useContext(UserContext);
  const token = localStorage.getItem("@KenzieHub:token");

  async function createTech(formData) {
    try {
      const response = await api.post("/users/techs", formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTechs([...techs, response.data]);
      toast.success("Tecnologia criada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function deleteTech(tech_id) {
    try {
      const response = await api.delete(`/users/techs/${tech_id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.filter((tech) => tech.id !== tech_id);
      setTechs(newTechs);
      toast.success("Tecnologia deletada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  }

  async function updateTech(tech_id, formData) {
    console.log(formData);
    try {
      const response = await api.put(`/users/techs/${tech_id}`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const newTechs = techs.map((tech) => {
        if (tech.id === tech_id) {
          return { ...tech, ...formData };
        } else {
          return tech;
        }
      });
      setTechs(newTechs);
      toast.success("Tecnologia atualizada com sucesso");
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  }

  return (
    <TechContext.Provider value={{ createTech, deleteTech, updateTech }}>
      {children}
    </TechContext.Provider>
  );
}
