import styled from 'styled-components';

export const theme = {
  colors: {
    blue: '#2891bb',
    easy: '#4b6b51',
    medium: '#ffdfba',
    hard: '#ffb3ba',
  },
};

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
  border-radius: 0 0 8px 8px;
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
  padding: 0 24px;
  display: grid;

  grid-template: 280px / repeat(2, 1fr);
  grid-auto-rows: 280px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    padding: 0;
    grid-template-columns: repeat(4, 1fr);
  }
`;
