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
  display: grid;
  gap: 8px;
  grid-template: repeat(10, 1fr) / repeat(4, 1fr);
`;
