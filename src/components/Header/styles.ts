import styled from "styled-components";

export const TopHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;

  a{
    color: var(--text-body);
    display: block;
    cursor: pointer;
    font-weight: bold;
    font-size: 2rem;
  }

  div{
    display: flex;
    align-items: center;
    cursor: pointer;

    h3{
      color: var(--text-body);
      font-size: 1rem;
      letter-spacing: 1px;
      margin-right: 0.5rem;
    }
  }
`;