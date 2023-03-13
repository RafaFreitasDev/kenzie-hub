import { StyledUpdadteTechForm } from "./style";
import { useForm } from "react-hook-form";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";

export function UpdateTechForm() {
  const { updateTech, deleteTech } = useContext(TechContext);
  const { editingTech, setEditingTech } = useContext(UserContext);
 
  const { register, handleSubmit } = useForm({
    defaultValues: {
      status: editingTech.status,
    },
  });

  function submit(formData) {
    updateTech(editingTech.id,formData);
    setEditingTech(null)
  }

  function removeTech(tech_id) {
    deleteTech(tech_id);
    setEditingTech(null)
  }

  return (
    <StyledUpdadteTechForm onSubmit={handleSubmit(submit)} role="dialog">
      <div className="form">
      <div className="head">
        <h3>Tecnologia Detalhes</h3>
        <button type="button" onClick={()=>setEditingTech(null)}>x</button>
      </div>
      <div className="name">
        <h3>Nome do projeto</h3>
        <span>{editingTech.title}</span>
      </div>
      <div className="status">
        <h3>Status</h3>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
      </div>
      <div className="btn">
        <button type="submit" className="btn1">Salvar alterações</button>
        <button type="button" className="btn2" onClick={() => removeTech(editingTech.id)}>
          Excluir
        </button>
      </div>
      </div>
    
    </StyledUpdadteTechForm>
  );
}
