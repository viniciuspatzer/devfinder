import styled from "styled-components";

export const Content = styled.div`
  margin-top: 2rem;
  padding: 0.25rem 2.5rem;
  background-color: var(--content-bg);
  border-radius: 0.75rem;
  box-shadow: 0px 16px 30px -10px rgba(0,0,0,0.2);

  @media(max-width: 500px){
    padding: 0.25rem 1.5rem;
  }
`;