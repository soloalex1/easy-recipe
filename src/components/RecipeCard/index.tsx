'use client';

import { Recipe } from '@/types';

import * as S from './styles';
import Image from 'next/image';

type RecipeCardProps = {
  recipe: Recipe;
};

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <S.Card>
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
