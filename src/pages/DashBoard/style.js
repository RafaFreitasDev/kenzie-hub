import styled from "styled-components";

export const StyledDashBoard = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 14px;

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    border-bottom: 1px solid var(--color-gray-2);
    color: var(--color-gray-0);

    h2 {
      color: var(--color-pink-1);
      font-size: 1.1rem;
    }

    button {
      height: 32px;
      width: 60px;
      background-color: var(--color-gray-3);
      color: white;
      border-radius: 4px;
      font-size: 0.7rem;
    }
  }

  .welcome {
    flex-direction: column;
    align-items: flex-start;
    h4 {
      font-size: 0.8rem;
      color: var(--color-gray-1);
      margin-top: 10px;
    }
  }

  .addTech {
    border-bottom: none;
    h2 {
      font-size: 1rem;
      color: var(--color-gray-0);
    }

    button {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background-color: var(--color-gray-3);
      color: white;
    }
  }

  .techList {
    background-color: var(--color-gray-3);
    border-radius: 4px;
    padding: 20px 9px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    /* margin: 0 auto; */

    li {
      height: 49px;
      background-color: var(--color-gray-4);
      border-radius: 4px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px;
      cursor: pointer;

      h3 {
        font-size: 0.9rem;
        color: var(--color-gray-0);
        font-weight: 700;
      }

      h4 {
        font-size: 0.8rem;
        color: var(--color-gray-1);
      }
    }

    li:hover{
      background-color: var(--color-gray-2);
    }
  }

  @media (min-width: 769px) {
    margin: 0 auto;
    align-items: center;
    display: block;
    .techList {
      margin: 0 auto;
    }
    div,
    ul {
      width: 100%;
      max-width: 1000px;
    }
    .welcome {
      flex-direction: row;
      h4 {
        margin-top: 0px;
      }
    }
    .warning {
      display: block;
    }
    @media (min-width: 1025px) {
      div {
        max-width: 1400px;
        padding: 20px 200px;
      }
    }
  }
`;
