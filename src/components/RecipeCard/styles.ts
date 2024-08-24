import styled, { css } from 'styled-components';

export const Card = styled.li<{
  $isSelected: boolean;
  $difficulty: string;
}>`
  ${({ theme, $isSelected, $difficulty }) => css`
    box-shadow: ${$isSelected ? 'none' : '#00000026 2px 2px 1px'};
    border-radius: 8px;
    border-width: 2px;
    border-style: solid;
    border-color: ${$isSelected ? theme.colors[$difficulty] : 'transparent'};
    font-family: var(--font-raleway);
    position: relative;
    display: flex;
    transition: all 0.25s ease-in-out;

    &:hover {
      box-shadow: ${$isSelected ? 'none' : '#00000026 4px 4px 4px'};
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
      color: ${$isSelected ? theme.colors[$difficulty] : '#000'};
    }

    ${Title} {
      color: ${$isSelected ? theme.colors[$difficulty] : '#000'};
    }
  `}
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 8ch;
  position: relative;
  margin-top: auto;
  z-index: 2;
  border-radius: 0 0 8px 8px;
  background-color: var(--white);
  padding: 4px 8px;
`;

export const Title = styled.h3`
  margin: 4px 0;
  transition: all 0.5s ease-in-out;
  font-family: var(--font-montserrat);
  font-size: 1rem;
  line-height: 1rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    font-size: 1.25rem;
    line-height: 1.25rem;
  }
`;

export const Difficulty = styled.p`
  margin: 0;
  font-size: 0.875rem;
  color: #666;
  font-family: var(--font-raleway);
`;

export const PositionBadge = styled.small`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  font-weight: 700;
  background-color: var(--white);
  border-radius: 8px 0 8px 0;
  padding: 8px;
`;
