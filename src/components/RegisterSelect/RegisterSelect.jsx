import { StyledRegisterSelect } from "./style";

export function RegisterSelect({ label, id, register }) {
  return (
    <StyledRegisterSelect>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register(id)}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo (Introdução ao Frontend)
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo (Frontend Avançado)
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo (Introdução ao Backend)
        </option>
        <option value="Quarto módulo (Backend Avançado)">
          Quarto módulo (Backend Avançado)
        </option>
      </select>
    </StyledRegisterSelect>
  );
}
