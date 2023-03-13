import { StyledDashBoard } from "./style";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { UserContext } from "../../providers/UserContext";
import { CreateTechForm } from "../../components/CreateTechForm/CreateTechForm";
import { UpdateTechForm } from "../../components/UpdateTechForm/UpdateTechForm";

export function DashBoard() {
  const { user, userLogout, techs, setEditingTech, editingTech,creating, setCreating } = useContext(UserContext);
  
  const navigate = useNavigate();

  return (
    <StyledDashBoard>
      <div>
        <h2>Kenzie Hub</h2>
        <button onClick={userLogout}>Sair</button>
      </div>
      <div className="welcome">
        <h3>Olá, {user.name}</h3>
        <h4>{user.course_module}</h4>
      </div>
      <div className="addTech">
        <h2>Tecnologias</h2>
        <button onClick={()=>setCreating(true)}>+</button>
      </div>
      <ul className="techList">
        {techs.map(tech=>(
          <li key={tech.id} onClick={()=>setEditingTech(tech)}>
            <h3>{tech.title}</h3>
            <h4>{tech.status}</h4>
          </li>
        ))}
      </ul>
      {creating && <CreateTechForm/>}

      {editingTech && <UpdateTechForm/>}
    </StyledDashBoard>
  );
}
