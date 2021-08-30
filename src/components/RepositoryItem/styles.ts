import styled from "styled-components";

export const Content = styled.div`
  position: relative;
  margin: 2.5rem 0;

  h3{
    color: var(--text-title);
    font-size: 1.25rem;
  }

  p, a{
    color: var(--text-body);
    margin-top: 0.25rem;
  }

  a{
    display: inline-block;
  }

  div{
    position: absolute;
    top: 0rem;
    right: 0rem;
    color: var(--text-title);
    display: flex;
    align-items: center;

    span{
      margin-right: 0.5rem;
      font-size: 1.1rem;
    }
  }
`;