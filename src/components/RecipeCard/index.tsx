'use client';

import Image from 'next/image';

import { Recipe } from '@/types';

import * as S from './styles';

type RecipeCardProps = {
  recipe: Recipe;
  selected: string;
};

const RecipeCard = ({ recipe, selected }: RecipeCardProps) => {
  const currentlySelected = selected === recipe.difficulty;

  return (
    <S.Card $isSelected={currentlySelected}>
      <S.PositionBadge>{recipe.position}</S.PositionBadge>
      <Image src={recipe.imageUrl} loading="lazy" alt="" layout="fill" />
      <S.TextContainer>
        <S.Title>{recipe.name}</S.Title>
        <S.Difficulty>{recipe.difficulty}</S.Difficulty>
      </S.TextContainer>
    </S.Card>
  );
};

export default RecipeCard;
