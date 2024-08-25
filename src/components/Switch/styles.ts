import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  text-align: center;
  padding: 0 24px;

  @media screen and (min-width: 768px) {
    text-align: right;
  }
`;

export const HiddenLabel = styled.label`
  &:not(:focus):not(:active) {
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    position: absolute;
    white-space: nowrap;
  }
`;

export const ButtonSwitch = styled.button`
  ${({ theme }) => css`
    display: inline-flex;
    flex-flow: row nowrap;
    align-items: center;
    gap: 0.25rem;
    padding: 4px 8px;
    justify-content: center;
    border: 1px solid transparent;
    border-radius: 2px;
    font-family: var(--font-raleway);
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    font-size: 1rem;

    svg {
      color: ${theme.colors.text.primary};
    }
  `}
`;
