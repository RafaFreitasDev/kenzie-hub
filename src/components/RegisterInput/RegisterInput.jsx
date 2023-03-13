import { StyledRegisterIpunt } from "./style";

export function RegisterInput({
  label,
  id,
  type,
  placeholder,
  error,
  register,
}) {
  return (
    <StyledRegisterIpunt>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register(id)} />
      {error ? <span>{error}</span> : null}
    </StyledRegisterIpunt>
  );
}
