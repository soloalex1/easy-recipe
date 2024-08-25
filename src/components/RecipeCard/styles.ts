import styled, { css } from 'styled-components';

export const Card = styled.li<{
  $isSelected: boolean;
  $difficulty: string;
}>`
  ${({ theme, $isSelected, $difficulty }) => css`
    box-shadow: ${$isSelected ? 'none' : theme.colors.shadow.default};
    background-color: ${theme.colors.background};
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: ${$isSelected ? theme.colors[$difficulty] : 'transparent'};
    font-family: var(--font-raleway);
    position: relative;
    display: flex;

    &:hover {
      box-shadow: ${$isSelected ? 'none' : theme.colors.shadow.hover};
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
      border-radius: 8px;
      z-index: 1;
    }

    ${PositionBadge} {
      color: ${$isSelected
        ? theme.colors[$difficulty]
        : theme.colors.text.primary};
    }

    ${Title} {
      color: ${$isSelected
        ? theme.colors[$difficulty]
        : theme.colors.text.primary};
    }
  `}
`;

export const TextContainer = styled.div`
  ${({ theme }) => css`
    width: 100%;
    height: 8ch;
    position: relative;
    margin-top: auto;
    z-index: 2;
    border-radius: 0 0 8px 8px;
    background-color: ${theme.colors.background};
    padding: 4px 8px;
  `}
`;

export const Title = styled.h3`
  ${({ theme }) => css`
    margin: 4px 0;
    font-family: var(--font-montserrat);
    color: ${theme.colors.text.primary};
    font-size: 1rem;
    line-height: 1rem;
    font-weight: 600;

    @media screen and (min-width: 768px) {
      font-size: 1.25rem;
      line-height: 1.25rem;
    }
  `}
`;

export const Difficulty = styled.p`
  ${({ theme }) => css`
    margin: 0;
    font-size: 0.875rem;
    color: ${theme.colors.text.secondary};
    font-family: var(--font-raleway);
  `}
`;

export const PositionBadge = styled.small`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    font-weight: 700;
    color: ${theme.colors.text.primary};
    background-color: ${theme.colors.background};
    border-radius: 8px 0 8px 0;
    padding: 8px;
  `}
`;
