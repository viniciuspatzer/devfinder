import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';

export const Container = styled.div`
  max-width: 720px;
  margin: 1rem auto;
  padding: 0 2%;
`;

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #141C2F; // #F6F8FF
    --content-bg: #1E2A47; // #FEFEFE
    --text-title: #FFFFFF; // #2B3442
    --text-body: #FFFFFF; // #4B6A9B

    --unavailable: #8A8A8A;
    --static-white: #FFFFFF;
    --contrast-blue: #0177FE;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background-color: var(--background);
  }

  body, input, textarea, button{
    font-family: 'Space Mono', monospace;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  // Media Queries
  html{
    @media(max-width: 600px){
      font-size: 87.5%;
    }

    @media(max-width: 500px){
      font-size: 81.25%;
    }

    @media(max-width: 400px){
      font-size: 75%;
    }
  }
`;