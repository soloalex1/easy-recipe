import styled from 'styled-components';

export const Card = styled.li`
  border: 1px solid black;
  border-radius: 6px;
  font-family: var(--font-raleway);
  position: relative;
  display: flex;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    border-radius: 6px;
    z-index: 1;
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 8ch;
  position: relative;
  margin-top: auto;
  z-index: 2;
  border-radius: 0 0 6px 6px;
  background-color: white;
  padding: 4px 8px;
`;

export const Title = styled.h3`
  font-size: 0.75rem;
  font-weight: 500;
  margin: 4px 0;
  font-family: var(--font-montserrat);

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const Difficulty = styled.p`
  margin: 0;
  font-size: 0.75rem;
  color: #666;
  font-family: var(--font-raleway);
`;

export const PositionBadge = styled.small`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;

  background-color: #eee;
  border-radius: 6px 0 6px 0;
  padding: 8px;
`;
