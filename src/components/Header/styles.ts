import styled from 'styled-components'

export const Container = styled.header`
  background: var(--black);
`;

export const Content = styled.div`
  margin: 0 auto;
  max-width: 1120px;

  padding: 2rem 1rem 8rem;
  
  display: flex;
  align-items: center;
  justify-content: space-around;

  h1{
    color: var(--text-title);
    font-size: 1.5rem;
  }

  button{ 
    background-color: var(--dark-blue);
    border: 0;
    border-radius: 0.25rem;
    color: var(--dark-yellow);
    font-size: 1rem;
    height: 3rem;
    padding: 0 2rem;

    transition: filter 0.3s;

    &:hover{
      filter: brightness(0.8);
    }

  }

`;