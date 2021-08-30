import styled from "styled-components";

export const Content = styled.main`
  margin-top: 2rem;
  padding: 2.5rem;
  background-color: var(--content-bg);
  border-radius: 0.75rem;
  box-shadow: 0px 16px 30px -10px rgba(0,0,0,0.2);

  @media(max-width: 500px){
    padding: 1.5rem;
  }

  p.bio{
    color: var(--text-body);
    margin: 2rem 0;
  }
`;

export const ProfileHeader = styled.div`
  display: flex;
  align-items: center;

  img{
    width: 125px;
    border-radius: 50%;

    @media(max-width: 500px){
      width: 100px;
    }
  }

  div{
    margin-left: 2rem;

    h1{
      color: var(--text-title);
      font-size: 1.75rem;
    }

    a{
      color: var(--contrast-blue);
    }

    p{
      color: var(--text-body);
    }
  }
`;

export const ProfileStats = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2.5rem;
  background-color: var(--background);
  border-radius: 0.75rem;

  div{
    p{
      color: var(--text-body);
    }

    span{
      color: var(--text-title);
      font-size: 1.75rem;
      font-weight: 700;
    }
  }
`;

export const ProfileBottom = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 2rem;

  @media(max-width: 600px){
    grid-template-columns: 1fr;
  }

  div{
    display: flex;
    align-items: center;
    padding: 0.5rem 0;
    margin-right: 2rem;
    color: var(--text-body);

    p, a{
      margin-left: 1rem;
      word-break: break-all;
      color: inherit;
    }

    &.unavailable{
      color: var(--unavailable);
    }
  }
`;