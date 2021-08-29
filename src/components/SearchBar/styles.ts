import styled from "styled-components";

export const Content = styled.div`
  background-color: var(--content-bg);
  border-radius: 0.75rem;
  padding: 0.75rem 0.5rem 0.75rem 1.5rem;
  box-shadow: 0px 4px 4px 0px rgba(0,0,0,0.25);

  form{
    display: flex;
    align-items: center;
    justify-content: space-between;

    div{
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    input[type="text"]{
      width: 100%;
      margin-left: 1rem;
      font-size: 1.1rem;
      background-color: transparent;
      color: var(--text-body);
      outline: 0;
      border: 0;

      &::placeholder{
      color: var(--text-body);
      }
    }
  }

  button[type="submit"]{
    padding: 1rem 1.5rem;
    border: 0;
    border-radius: 0.75rem;
    background-color: var(--contrast-blue);
    color: var(--static-white);

    &:hover{
      filter: brightness(1.25);
    }
  }
}
`;