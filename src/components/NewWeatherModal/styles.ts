import styled from "styled-components";

export const Container = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  

  h2 { 
    color: var(--dark-blue);
    font-size: 1.5rem;
    margin: 2rem 0;
  }

  p { 
    padding: 1rem;
    margin-top: 3rem;
    font-weight: 600;
    font-size: 3rem;

  }

  span { 
    padding:3rem;
    margin-top: 3rem;
    font-size: 0.8rem;
  
  }
`;
