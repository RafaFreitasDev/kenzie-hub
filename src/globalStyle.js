import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --color-pink-1: #ff577f;
    --color-pink-2: #ff427f;
    --color-pink-3: #59323f;
    --color-gray-0: #f8f9fa;
    --color-gray-1: #868e96;
    --color-gray-2: #343b41;
    --color-gray-3: #212529;
    --color-gray-4: #121214;
    --font-size-title: 1rem;
    --font-size-headline: 0.8rem;
    --font-weight-title: 700;
  
}

body{
    font-family: 'Inter', sans-serif;
    background-color: var(--color-gray-4);
    
}

button{
    cursor: pointer;
}

`