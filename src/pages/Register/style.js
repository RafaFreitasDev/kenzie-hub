import styled from "styled-components";

export const StyledRegister = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 14px;

  div {
    display: flex;
    justify-content: space-between;

    h2 {
      color: var(--color-pink-1);
      font-size: 1.1rem;
    }

    button {
      height: 32px;
      width: 80px;
      background-color: var(--color-gray-3);
      color: white;
      border-radius: 4px;
      font-size: 0.7rem;
    }
  }

  form {
    margin-top: 40px;
    padding: 50px 20px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #212529;
    border-radius: 4px;

    h3 {
      align-self: center;
      color: var(--color-gray-0);
      font-size: 0.9rem;
    }

    p {
      align-self: center;
      color: var(--color-gray-1);
      font-size: 0.7rem;
      margin-top: 20px;
      margin-bottom: 10px;
    }

    .boxInput {
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
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
    }

    label {
      color: var(--color-gray-0);
      font-size: 0.7rem;
      margin: 10px 0;
    }

    select {
      width: 100%;
      background-color: var(--color-gray-2);
      color: rgba(134, 142, 150, 1);
      border-radius: 4px;
      height: 40px;
      padding: 0 10px;
    }

    button {
      width: 100%;
      background-color: var(--color-pink-3);
      border-radius: 4px;
      color: white;
      margin-top: 20px;
      height: 40px;
    }
  }

  @media (min-width: 500px) {
    align-items: center;

    div {
      gap: 200px;
    }

    form {
      max-width: 370px;
    }
  }
`;
