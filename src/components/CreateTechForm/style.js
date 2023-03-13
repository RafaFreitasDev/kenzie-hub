import styled from "styled-components";

export const StyledCreateTechForm = styled.form`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100vh;
display: flex;
align-items: center;
justify-content: center;

  .form {
    width: 50%;
    max-width: 370px;
    min-width: 290px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-gray-3);
    align-items: center;
    border-radius: 4px;
    padding: 0;
    border: none;


    .head {
      background-color: var(--color-gray-2);
      padding: 0 20px;
      height: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;

      h3 {
        color: var(--color-gray-0);
        font-size: 0.8rem;
      }
      button {
        border: none;
        color: var(--color-gray-1);
        background-color: var(--color-gray-2);
        font-size: 1.5rem;
        width: 20px;
        display: flex;
        align-items: center;
      }
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0 20px;
      width: 100%;
      border: none;

      label {
        font-size: 0.7rem;
        color: var(--color-gray-0);
        margin-top: 20px;
      }

      input {
        width: 100%;
        font-size: 0.8rem;
        height: 38px;
        background-color: var(--color-gray-2);
        color: var(--color-gray-0);
        padding: 10px;
        margin-top: 20px;
        border-radius: 4px;
      }

      select {
        width: 100%;
        font-size: 0.8rem;
        height: 38px;
        background-color: var(--color-gray-2);
        color: var(--color-gray-0);
        padding: 10px;
        margin-top: 20px;
        border-radius: 4px;
      }

      button {
        width: 100%;
        background-color: var(--color-pink-1);
        font-size: 0.8rem;
        height: 38px;
        margin: 20px 0;
      }
    }
  }


`;
