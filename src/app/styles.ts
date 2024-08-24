import styled from 'styled-components';

export const MainContainer = styled.main`
  scrollbar-gutter: stable both-edges;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr min(100ch, 100%) 1fr;

  > * {
    grid-column: 2;
  }
`;

export const PageHeader = styled.header`
  width: 100%;
  grid-column: 1 / -1;
  background-color: #eee;
`;

export const PageTitle = styled.h1`
  font-family: var(--font-montserrat);
  text-align: center;
`;

export const SectionTitle = styled.h2`
  font-family: var(--font-montserrat);
  text-align: center;
`;

export const RecipeGrid = styled.ol`
  margin: 24px 0;
  padding: 0 8px;
  display: grid;
  gap: 8px;
  grid-template: repeat(14, 200px) / repeat(3, 1fr);
  grid-auto-rows: minmax(30px, auto);

  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template: repeat(10, 200px) / repeat(4, 1fr);
  }
`;
