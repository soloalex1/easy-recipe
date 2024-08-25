import styled, { css } from 'styled-components';

export const ButtonsContainer = styled.div`
  padding: 0 24px;
  display: flex;
  justify-content: center;
  gap: 8px;

  @media screen and (min-width: 768px) {
    justify-content: flex-end;
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
    gap: 0.5rem;
    padding: 0.25rem 0.5rem;
    justify-content: center;
    border: 2px solid transparent;
    border-radius: 8px;
    font-family: var(--font-raleway);
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    font-size: 1rem;

    &[aria-pressed='true'] {
      border: 2px solid ${theme.colors.text.primary};
    }

    span {
      display: none;

      @media screen and (min-width: 768px) {
        display: initial;
      }
    }

    svg {
      color: ${theme.colors.text.primary};
    }
  `}
`;
