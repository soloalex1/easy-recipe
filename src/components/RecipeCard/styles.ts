import styled from 'styled-components';

export const Card = styled.li`
  padding: 8px;
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
  }
`;

export const TextContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const Title = styled.h3`
  font-size: 1.125rem;
  font-weight: 500;
  margin: 8px 0;
  font-family: var(--font-montserrat);
`;

export const Difficulty = styled.p`
  font-size: 0.875rem;
  color: #666;
  font-family: var(--font-raleway);
`;

export const PositionBadge = styled.small`
  position: absolute;
  top: 0;
  left: 0;

  background-color: #eee;
  border-top-left-radius: 6px;
  padding: 8px;
`;
