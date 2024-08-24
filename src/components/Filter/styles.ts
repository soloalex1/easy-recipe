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
  font-family: var(--font-montserrat);
  font-weight: 700;
  text-align: center;
`;

export const FiltersDescription = styled.small`
  font-family: var(--font-raleway);
  font-size: 1rem;
  font-weight: 500;
  color: #666;
`;

export const Button = styled.button<{ isActive: boolean }>`
  ${({ isActive }) => css`
    padding: 12px 32px;
    background-color: #fff;
    font-family: var(--font-raleway);
    font-weight: 600;
    border: 2px solid ${isActive ? '#0096FF' : '#111'};
    color: ${isActive ? '#0096FF' : '#111'};

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
  `}
`;
