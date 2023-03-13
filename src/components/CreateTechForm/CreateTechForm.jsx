import { StyledCreateTechForm } from "./style";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { TechContext } from "../../providers/TechContext";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext";


const formSchema = yup.object({
    title:yup.string().required("Nome obrigatorio")
}).required();


export function CreateTechForm() {
    const {createTech} = useContext(TechContext)
    const {setCreating} = useContext(UserContext)

  const { register, handleSubmit, reset, formState: {errors} } = useForm({resolver: yupResolver(formSchema)});


  function submit(formData){
    createTech(formData)
    setCreating(false)
    reset()
  }

  return (
    <StyledCreateTechForm onSubmit={handleSubmit(submit)} role="dialog">
      <div className="form">
      <div className="head">
        <h3>Cadastrar Tecnologia</h3>
        <button type="button" onClick={()=>setCreating(false)}>x</button>
      </div>
      <div className="body">
        <label htmlFor="title">Nome</label>
        <input
          type="text"
          placeholder="Nome da tecnologia"
          {...register("title")}
        />
        <span>{errors.title?.message}</span>
        <label htmlFor="status">Selecionar status</label>
        <select name="status" id="status" {...register("status")}>
          <option value="Iniciante">Iniciante</option>
          <option value="Intermediário">Intermediário</option>
          <option value="Avançado">Avançado</option>
        </select>
        <button type="submit">Cadastrar Tecnologia</button>
      </div>
      </div>
      
    </StyledCreateTechForm>
  );
}
