import styled, { css } from 'styled-components';

export const Fieldset = styled.fieldset`
  border: none;
  margin: 16px 0;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  gap: 8px;
`;

export const FiltersLabel = styled.legend`
  ${({ theme }) => css`
    font-family: var(--font-montserrat);
    font-weight: 700;
    text-align: center;
    margin: 0 auto;
    color: ${theme.colors.text.primary};
  `}
`;

export const FiltersDescription = styled.small`
  ${({ theme }) => css`
    font-family: var(--font-raleway);
    font-size: 1rem;
    font-weight: 500;
    color: ${theme.colors.text.secondary};
  `}
`;

export const Button = styled.button<{ $isActive: boolean; id: string }>`
  ${({ theme, id, $isActive }) => css`
    padding: 8px 12px;
    background-color: ${theme.colors.background};
    font-family: var(--font-raleway);
    font-weight: 600;
    border: 2px solid
      ${$isActive ? theme.colors[id] : theme.colors.text.primary};
    color: ${$isActive ? theme.colors[id] : theme.colors.text.primary};

    &:first-of-type {
      border-radius: 8px 0 0 8px;
      border-right-width: 1px;
    }

    &:nth-of-type(2) {
      border-left-width: 1px;
      border-right-width: 1px;
    }

    &:last-of-type {
      border-radius: 0 8px 8px 0;
      border-left-width: 1px;
    }

    @media screen and (min-width: 768px) {
      padding: 12px 32px;
    }
  `}
`;
