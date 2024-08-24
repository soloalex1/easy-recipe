'use client';

import Image from 'next/image';

import { Recipe } from '@/types';

import * as S from './styles';

type RecipeCardProps = {
  recipe: Recipe;
  selected: boolean;
};

const RecipeCard = ({ recipe, selected }: RecipeCardProps) => {
  return (
    <S.Card>
      <S.PositionBadge>{recipe.position}</S.PositionBadge>
      <Image src={recipe.imageUrl} loading="lazy" alt="" layout="fill" />
      <S.TextContainer>
        <S.Title $selected={selected}>{recipe.name}</S.Title>
        <S.Difficulty>{recipe.difficulty}</S.Difficulty>
      </S.TextContainer>
    </S.Card>
  );
};

export default RecipeCard;
