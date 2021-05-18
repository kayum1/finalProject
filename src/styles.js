import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 94vw;
  max-width: 550px;
  margin: 24px auto;
  background: white;
  padding: 1rem;
  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.05);

  display: grid;
  grid-template-columns: repeat(1fr 1fr);
  grid-template-rows: repeat(1fr 1fr);
  grid-gap: 1rem;
  grid-template-areas:
    'sectionhead sectionhead'
    'entry entry';
`;

export const PageHeader = styled.h2`
  font-family: Lobster;
  color: var(--blue);
  font-size: 2.5rem;
  text-transform: capitalize;
  padding-bottom: 0.25rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid #007eb677;
  grid-area: sectionhead;
`;

export const nav = styled.h2`
  background: #007eb6;
  width: 100%;
  transition: all 0.5s;
  position: sticky;
  top: 0;
`;

export const NavUL = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const NavLI = styled.li`
  display: block;
  padding: 8px;
  background-color: #dddddd;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
`;
