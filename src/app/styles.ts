import styled, { createGlobalStyle, css } from 'styled-components';

export const theme = {
  name: 'light',
  colors: {
    blue: '#0057E7',
    easy: '#008744',
    medium: '#FFA700',
    hard: '#D62D20',
    background: '#FAF8F6',
    shadow: {
      default: '#00000026 2px 2px 1px',
      hover: '#00000026 4px 4px 4px',
    },
    text: {
      primary: '#000000d9',
      secondary: '#00000099',
    },
  },
};

export const darkTheme = {
  name: 'dark',
  colors: {
    blue: '#0057E7',
    easy: '#008744',
    medium: '#FFA700',
    hard: '#D62D20',
    background: '#121212',
    shadow: {
      default: '#FFFFFF26 2px 2px 1px',
      hover: '#FFFFFF26 4px 4px 4px',
    },
    text: {
      primary: '#FFF',
      secondary: '#FFFFFFB3',
    },
  },
};

export const GlobalStyle = createGlobalStyle`
${({ theme }) => css`
  * {
    box-sizing: border-box;
    transition: all 0.5s ease-in-out;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background-color: ${theme.colors.background};
  }

  body {
    width: 100%;
  }
`}
`;

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
  ${({ theme }) => css`
    width: 100%;
    grid-column: 1 / -1;
    background-color: ${theme.colors.background};
    border-radius: 0 0 8px 8px;
  `}
`;

export const PageTitle = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-family: var(--font-montserrat);
    text-align: center;
  `}
`;

export const SectionTitle = styled.h2`
  ${({ theme }) => css`
    color: ${theme.colors.text.primary};
    font-family: var(--font-montserrat);
    text-align: center;
  `}
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
