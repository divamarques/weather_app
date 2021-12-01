import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 1rem;

table {
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    color: var(--text-body);
    font-weight: 500;
    padding: 0.5rem 1rem;
    text-align: center;
    line-height: 1.5rem;

    &:first-child {
      text-align: left;
    }
  }

  td {
    padding: 0.5rem 1rem;
    border: 0;
    background: var(--shape);
    color: var(--text-title);
    border-radius: 0.25rem;
    text-align: center;

    &:first-child {
      color: var(--text-body);
      text-align: left;
    }

    button {
      background-color: var(--dark-blue);
      border: 0;
      border-radius: 0.25rem;
      color: var(--dark-yellow);
      font-size: 1rem;
      height: 2rem;
      padding: 0 2rem;
      
      

      transition: filter 0.3s;

      &:hover{
        filter: brightness(0.8);
      }
    }
  }
}
`;