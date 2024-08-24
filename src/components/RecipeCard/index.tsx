'use client';

import Image from 'next/image';

import { Recipe } from '@/types';

import * as S from './styles';

type RecipeCardProps = {
  recipe: Recipe;
  selected: string;
};

const RecipeCard = ({ recipe, selected }: RecipeCardProps) => {
  const { difficulty, position, imageUrl, name } = recipe;

  const isSelected = selected === difficulty;

  return (
    <S.Card $isSelected={isSelected} $difficulty={difficulty.toLowerCase()}>
      <S.PositionBadge>{position}</S.PositionBadge>
      <Image src={imageUrl} loading="lazy" alt="" layout="fill" />
      <S.TextContainer>
        <S.Title>{name}</S.Title>
        <S.Difficulty>{difficulty}</S.Difficulty>
      </S.TextContainer>
    </S.Card>
  );
};

export default RecipeCard;
