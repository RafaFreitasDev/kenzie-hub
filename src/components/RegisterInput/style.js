import styled from "styled-components";

export const StyledRegisterIpunt = styled.span`
  display: flex;
  flex-direction: column;
  width: 100%;
  label {
    color: var(--color-gray-0);
    font-size: 0.7rem;
    margin: 10px 0;
  }

  input {
    width: 100%;
    background-color: var(--color-gray-2);
    color: rgba(134, 142, 150, 1);
    border-radius: 4px;
    height: 40px;
    padding: 0 10px;
  }

  input::placeholder {
    color: rgba(134, 142, 150, 1);
    font-size: 0.85rem;
  }

  span {
    color: var(--color-gray-1);
    font-size: 0.7rem;
  }
`;
